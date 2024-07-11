import Header from "../Header";
import Footer from "../Footer";
import { formatDistanceToNow } from "date-fns";
import "../comics.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comics",
  description: "On this page I fetch id and comics using my Innopolis email.",
};

interface APIResponse {
  success: boolean;
  json_text: string;
}
interface image {
  src: string;
  alt: string;
  title: string;
}
interface Comics {
  img: image;
  title: string;
  date: string;
  realDate: string;
  disp: boolean;
}
export default async function Comics() {
  let email:string;
  let Comic:Comics;
  const apiresp:APIResponse = await getComics('e.glebov@innopolis.university');
  const img: image = {
    alt: JSON.parse(apiresp.json_text)["alt"],
    title: JSON.parse(apiresp.json_text)["safe_title"],
    src: JSON.parse(apiresp.json_text)["img"],
  };
  const date = new Date(
    Date.UTC(
      Number.parseInt(JSON.parse(apiresp.json_text)["year"]) as number,
      Number.parseInt(JSON.parse(apiresp.json_text)["month"]) as number,
      Number.parseInt(JSON.parse(apiresp.json_text)["day"]) as number,
    ),
  );
  const formattedDate = formatDistanceToNow(date);
  const comic: Comics = {
    img: img,
    date: formattedDate,
    realDate: date.toLocaleDateString(),
    disp: true,
    title: img.title,
  };
  Comic = comic;
  let error:boolean = false;
  async function getComics(email: string): Promise<APIResponse> {
    const id: string = (await fetchId(email)) as string;
    if (id == "Wrong email") {
      const resp: APIResponse = {
        success: false,
        json_text: "Wrong email",
      };
      return resp;
    }
    const comics: string = (await fetchComics(id)) as string;
    const resp: APIResponse = {
      success: true,
      json_text: JSON.stringify(comics),
    };
    return resp;
  }
  async function fetchId(email: string): Promise<string> {
    if (
      email.includes("@innopolis.university") &&
      email.substring(email.search("@innopolis.university")) ==
        "@innopolis.university"
    ) {
      const params: URLSearchParams = new URLSearchParams();
      params.append("email", email);
      const resp: string = (await fetch(
        "https://fwd.innopolis.university/api/hw2?" +
          params
            .toString()
            .replace("%40innopolis.university", "@innopolis.university"),
      ).then((r) => r.json())) as string;
      return resp;
    } else {
      return "Wrong email";
    }
  }
  async function fetchComics(id: string): Promise<string> {
    const params: URLSearchParams = new URLSearchParams();
    params.append("id", id);
    const ret: string = await (fetch(
      "https://fwd.innopolis.university/api/comic?" + params.toString(),
    ).then((r) => r.json()) as Promise<string>);
    return ret;
  }

  const handlerEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.value.indexOf("@innopolis.university") != -1) {
      e.target.style.background = "white";
      e.target.style.color = "black";
    } else {
      e.target.style.background = "red";
      e.target.style.color = "white";
    }
    email = e.target.value;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // if (email!=null){
    //   console.log( email.indexOf("@innopolis.university"));
    //   console.log(email.substring(email.indexOf("@innopolis.university")));
    // }
    if (
      email != null &&
      email.indexOf("@innopolis.university") != -1 &&
      email.substring(email.indexOf("@innopolis.university")) ===
        "@innopolis.university"
    ) {
      email = email.replace("%40", "@");
      const apiresp: APIResponse = await getComics(email);
      if (apiresp.success === false) {
        error = true;
        return;
      } else {
        error = false;
        const img: image = {
          alt: JSON.parse(apiresp.json_text)["alt"],
          title: JSON.parse(apiresp.json_text)["safe_title"],
          src: JSON.parse(apiresp.json_text)["img"],
        };
        const date = new Date(
          Date.UTC(
            Number.parseInt(JSON.parse(apiresp.json_text)["year"]) as number,
            Number.parseInt(JSON.parse(apiresp.json_text)["month"]) as number,
            Number.parseInt(JSON.parse(apiresp.json_text)["day"]) as number,
          ),
        );
        const formattedDate = formatDistanceToNow(date);
        const comic: Comics = {
          img: img,
          date: formattedDate,
          realDate: date.toLocaleDateString(),
          disp: true,
          title: img.title,
        };
        Comic = comic;
      }
    } else {
      error = true;
    }
  };
  return (
    <>
      <main>
          <div
            className="SiteElement"
            id="comics"
            style={{ display: "block", textAlign: "left" }}
          >
            <h2>Comics</h2>
            <div id="comicsContent">
              <div
                className="comics"
                style={{
                  display: Comic.disp ? "block" : "none",
                  margin: "auto",
                }}
              >
                <img
                  src={Comic.img.src}
                  alt={Comic.img.alt}
                  title={Comic.img.title}
                ></img>
                <p>
                  {Comic.title} {Comic.date} ago ({Comic.realDate})
                </p>
              </div>
            </div>
          </div>
      </main>
    </>
  );
}
