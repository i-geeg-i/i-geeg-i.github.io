import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import "../style.css";
export default function Index() {
  const nav = useNavigate();
  function comicsbtn(){
      nav("./comics");
  }
    return (
      <>
      <Header page="index"/>
      <main>
        <div className="SiteElement">
          <img className="photo" src="photo1.png" alt="My photo"/>
          <p>
              Hello! My name is Egor, and I am a software developer with a keen interest in building websites, desktop applications, and Telegram bots. Born 18 years ago, I started programming at the age of 12 with Python. Currently, I am a first-year student at Innopolis University. My passion for technology and continuous learning fuels my drive to innovate and excel in my field.
          </p>
          <p>I have a strong background in C# and Python, with solid experience in Java, C, and C++. I enjoy crafting interactive experiences using Unity and Blazor, and I'm continuously expanding my skill set in web development with HTML and CSS. I'm currently in the process of studying and improving these web development skills, with the goal of reaching a higher proficiency level soon.</p>
          <p>In addition to my technical skills, I am fluent in Russian and proficient in English, holding a B2 SELT certificate. My ability to communicate effectively, work collaboratively within a team, and approach problems with critical thinking and creativity are some of my key strengths.</p>
          <p>Beyond my professional pursuits, I have a vibrant array of interests that keep my life balanced and engaging. From playing badminton and cycling to diving into the worlds of computer games and anime, I am always exploring new ways to enrich my mind and body.</p>
        </div>
        <div className="SiteElement">
                <h2>Feel free to explore my portfolio!</h2>
                <h2> Let's connect and create something amazing together!</h2>
        </div>
        <div className="SiteElement" id="comics">
                <button id="comics-btn" onClick={comicsbtn}>View some comics</button>
            </div>
      </main>
      <Footer year={"2024"}/>
      </>  
    );
  }