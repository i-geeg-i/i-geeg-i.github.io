import Header from "../Header";
import Footer from "../Footer";
import "../style.css";
export default function About() {
    return (
      <>
      <main>      
        <div className="SiteElement" id="TechSkils">
            <h2>Technical skills</h2>
            <ul>
                <li>C# - my main and favourite language, high level
                    <ul>
                        <li>Blazor - middle level</li>
                        <li>Unity - low level</li>
                    </ul>
                </li>
                <li>Python - second favourite language, high level</li>
                <li>Java - middle level</li>
                <li>C, C++ - low level</li>
                <li>HTML, CSS, JS, TS, React - low level. Currently in the process of studying and improving</li>
            </ul>
            </div>
        <div className="SiteElement" id="SoftSkils">
            <h2>Soft skills</h2>
            <ul>
                <li>Team Collaboration</li>
                <li>Friendliness</li>
                <li>Time Management</li>
                <li>Problem Solving</li>
                <li>Critical Thinking</li>
            </ul>
        </div>
        <div className="SiteElement" id="LangSkils">
            <h2>Language skills</h2>
            <ul>
                <li>Russian - native</li>
                <li>English - not less than B2 with a SELT certificate</li>
            </ul>
        </div>
        <div className="SiteElement" id="MoreThanWork">
            <h2>More than work</h2>
            <img className = "photo2" src="photo2.png" alt="My photo"/>
            
            <p>I have a vibrant and multifaceted array of interests that keep my life both active and engaging. I have a passion for badminton and cycling, which not only keep me physically fit but also provide me with a great way to enjoy the outdoors and unwind.</p>
            <p>When it comes to computer games, I have a taste for variety and depth. I dive into the complex world of &quot;Crusader Kings 3&quot;, manage agricultural empires in &quot;Farming Simulator 22&quot;, engage in epic space battles in &quot;Destiny 2&quot;, explore the expansive universe of &quot;Genshin Impact&quot;, construct and survive in &quot;Minecraft&quot;, and design intricate cities in both parts of &quot;Cities: Skylines&quot;. These games offer me endless hours of strategy, creativity, and adventure.</p>
            <p>My intellectual side is equally impressive, with a love for reading that has led me to admire the works of Albert Camus. His profound explorations of existential themes resonate deeply with me, adding a thoughtful dimension to my literary pursuits.</p>
            <p>In addition to reading, I sometimes immerse myself in the colorful and diverse world of anime. Series like &quot;Banana Fish&quot;, &quot;KonoSuba: God&apos;s Blessing on This Wonderful World!&quot;, &quot;Spy x Family&quot;, and &quot;Kamisama Kiss&quot; provide me with a mix of thrilling stories, humor, and heartwarming moments.</p>
            <p>My love for visual storytelling extends to films as well, where I enjoy watching a wide range of genres and styles, further enriching my appreciation for different forms of narrative art.</p>
        </div>
    </main>

    </>
      
    );
  }