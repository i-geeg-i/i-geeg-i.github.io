import Header from "../Header";
import Footer from "../Footer";
import BeautifulA from "../BeautifulA";
import "../style.css";
export default function Contacts() {
    return (
      <>
        <Header page="contacts"/>
        <main className="ok">
        <div className="links">      
          <h2>If you are interested to contact me you may do it by:</h2>
          <a href="https://t.me/i_geeg_i" style={{marginRight: "15px"}} id="tg-link"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="Telegram" style={{height: "50px", width: "50px"}}/></a> 
          <a href="mailto:glebov.el2005@yandex.ru" id="email"><img  src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000" alt="Email" style={{height: "50px", width: "50px"}}/></a>
          <h2>Also you may see my projects on GitHub</h2>
          <a href="https://github.com/i-geeg-i" className="img" id="gh-link"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" style={{height: "50px", width: "50px"}}/></a> 
        </div> 
        <div className="location">
          <p>Most of the time you may find me in <BeautifulA link="https://maps.app.goo.gl/WQYP6tSePM7fHHv98" title="Link to the map" text="Innopolis"/>. However, sometimes I&apos;m present in my home town - <BeautifulA link="https://maps.app.goo.gl/2sQoMm4jzycDoNVq9" title="Link to the map" text="Magnitogorsk"/>.</p>
        </div>
    </main>
    <Footer year={"2024"}/>
      </>
    );
  }