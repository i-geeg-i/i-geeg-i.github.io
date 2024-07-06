'use client';
import Header from "../Header";
import Footer from "../Footer";
import { formatDistanceToNow } from 'date-fns';
import "../comics.css";
import { useState } from "react";
interface APIResponse{
  success : boolean;
  json_text : string; 
}
interface image{
  src : string;
  alt : string;
  title : string;
}
interface Comics{
  img : image;
  title : string;
  date : string;
  realDate : string;
  disp : boolean
}
export default function Comics() {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [comic, setComic] = useState<Comics>({
    img: { src: "", alt: "", title: "" },
    title: "",
    date: "",
    realDate : "",
    disp: false
  });
  const [error, setError] = useState<boolean>(false);
  async function getComics(email : string) : Promise<APIResponse>{
    const id : string = await fetchId(email) as string;
    if (id == "Wrong email"){
        const resp : APIResponse = {
            success : false,
            json_text : "Wrong email"
        }
        return resp;
    }
    const comics : string = await fetchComics(id) as string;
    const resp : APIResponse = {
        success : true,
        json_text : JSON.stringify(comics)
    }
    return resp;
}
async function fetchId(email : string): Promise<string>{
    if (email.includes("@innopolis.university") && email.substring(email.search("@innopolis.university")) == "@innopolis.university"){
        const params : URLSearchParams = new URLSearchParams();
        params.append('email', email);
        const resp : string = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString().replace("%40innopolis.university","@innopolis.university"))
            .then(r => r.json()) as string;
        return resp
    }
    else{
        return "Wrong email";
    }
}
async function fetchComics(id : string) : Promise<string>{
  const params : URLSearchParams = new URLSearchParams();
  params.append('id', id);
  const ret : string = await (fetch('https://fwd.innopolis.university/api/comic?' + params.toString())
      .then(r => r.json()) as Promise<string>);
  return ret;
}


  const handlerEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.indexOf("@innopolis.university") != -1){
      e.target.style.background = "white";
      e.target.style.color = "black";
    }
    else{
      e.target.style.background = "red";
      e.target.style.color = "white";
    }
    setEmail(e.target.value);
  };


  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // if (email!=null){
    //   console.log( email.indexOf("@innopolis.university"));
    //   console.log(email.substring(email.indexOf("@innopolis.university")));
    // }
    if (email != null && email.indexOf("@innopolis.university") != -1 && email.substring(email.indexOf("@innopolis.university")) === "@innopolis.university"){
      setEmail(email.replace("%40","@"));
      const apiresp : APIResponse = await getComics(email);
      if (apiresp.success === false){
        setError(true);
        return;
      }
      else{
        setError(false);
        const img : image = {
          alt : JSON.parse(apiresp.json_text)['alt'],
          title : JSON.parse(apiresp.json_text)['safe_title'],
          src : JSON.parse(apiresp.json_text)['img']
        }
        const date = new Date( Date.UTC( Number.parseInt(JSON.parse(apiresp.json_text)["year"]) as number,  Number.parseInt(JSON.parse(apiresp.json_text)["month"]) as number,  Number.parseInt(JSON.parse(apiresp.json_text)["day"]) as number));
        const formattedDate = formatDistanceToNow(date);
        const comic: Comics = {
            img: img,
            date: formattedDate,
            realDate: date.toLocaleDateString(),
            disp: true,
            title: img.title
        };
        setComic(comic);
      }
      }
      else{
        setError(true);
      }
    }
    return (
      <>
        <main>
          <div className="SiteElement">
            <form id="form-comics">
              <label htmlFor="email" id="email-label">Innopolis email:</label>
              <input type="email" placeholder="e.glebov@innopolis.university" id="email" onChange={handlerEmailChange}/>
              <label htmlFor="email" id="wrong-email" style={{display: error ? 'block' : 'none'}}>Wrong email!</label>
            </form>
            <button id="get-comics-btn" onClick={handleSubmit}>Get comics</button>
          </div>
            {comic.disp && (
              <div className="SiteElement" id="comics" style={{display: "block", textAlign: "left"}}>
              <h2>Your comics</h2>
            <div id="comicsContent">
              <div className="comics" style={{ display: comic.disp ? "block" : "none" , margin: "auto"}}>
                <img src={comic.img.src} alt={comic.img.alt} title={comic.img.title}></img>
                <p>{comic.title} {comic.date} ago ({comic.realDate})</p>
              </div>
            </div>
            </div>
          )}
          
        </main>
      </>
    );
  }