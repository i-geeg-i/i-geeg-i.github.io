"use client";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import "./style.css";
import Link from "next/link";
import { Metadata } from "next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import ScrollComponent from "./scroll";

interface Item {
  spec: string;
  time: string;
  disc: string;
}

interface Props {
  items: Item[];  // Expecting items to be an array of Item objects
  text: string;
}

// export const metadata: Metadata = {
//   title: "Main page",
//   description: "This is the main page with a bit info about me.",
// };

export default function Home() {
  const who: Item[] = [
    { spec: 'Student', time: "2023 - now", disc: 'I’m an ungraduated second year bachelor student of Innopolis University.' },
    { spec: 'Front end developer ', time: "2020 - now", disc: 'Started learning front end on my own in school. Enhanced my knowledge in university. Have done some interesting projects ' },
    { spec: 'Back end developer', time: "2018 - now", disc: 'Started my way by learning python as kid. Continue learning at the university' },
    { spec: 'UX/UI designer', time: "2024 - now", disc: 'Learn some basics in the university. And become interested in it' },
    { spec: 'English speaking', time: "2012 - now", disc: 'Why not? Have proofed B2 level of language by SELT' },
    { spec: 'Russian speaking', time: "2005 - now", disc: 'Have native level of russian' },
  ];
  const what: Item[] = [
    { spec: 'Project for sales man', time: "05.2024-07.2024", disc: 'Working in team, we created great website for customer comfort and convenience. They now have easy access to all goods the have, can edit them and control supplies' },
    { spec: 'Coffeehouse Website', time: "05.2024 - 07.2024", disc: 'Working as team again, created cozy and convenient web site and UX/UI design for phone app' },
    { spec: 'Telegram Bot\nFor Notifications', time: "09.2024 - now", disc: 'Maintain a bot for Innopolis university foreign students. Implementing new features by request of the customer' },
    { spec: 'Web site for teacher', time: "05.2024 - 06.2024", disc: 'Website to sale courses over the Internet. With availability to register your child for needed course and needed slot' },
    { spec: 'HR app', time: "07.2024-07.2024", disc: 'Micro test to find out personal characteristics of workers. Useful them forming teams' },
    { spec: 'My Wishes', time: "09.2024-now", disc: 'Web site to form personal wish lists. Still in work' },
    { spec: 'Small games', time: "2018-2020", disc: 'Some really simple small games, like tic-ta-toe. Created for educational purposes' },
    { spec: 'Shamir Secret Sharing algorithm ', time: "2025-2025", disc: 'Simple website and backend to show work of Shamir Algorithm, we created it as team' },
  ];
  const why: Item[] = [
    { spec: 'Ready to learn', time: "⭐", disc: 'As a young person, I’m really interested in learning something new' },
    { spec: 'Team person', time: "⭐", disc: 'I like working not only on my own, but also as part of the team. Usually can find  a common language with colleagues' },
    { spec: 'Hard worker', time: "⭐", disc: 'I really like to work on some interesting projects, And my previous work experience shows that, to do some work task is my passion' },
    { spec: 'Friendly person', time: "⭐", disc: 'I interested in many topics beside IT, So in free from work time, we can discus many themes ' },
  ];
  return (
    <main>
      <div className="hi">
        <img className="photo" src="photo2.png" alt="My photo" />
        <h1>GEEG</h1>
        <h2>Egor Glebov</h2>
      </div>
      <div id="who" className="s_carousel">
        
        <ScrollComponent props={{items: who, text: "Who I am?"}}/>
      </div>
      <div id="what" className="s_carousel">
        <ScrollComponent props={{items: what, text: "What I have done?"}}/>
      </div>
      <div id="why" className="s_carousel">
        <ScrollComponent props={{items: why, text: "Why me?"}}/>
      </div>
      <div className="interested">
        <h1>Interested?</h1>
        <div className="contacts">
          <a href="mailto:glebov.el2005@yandex.ru"><img src="Mail.png"/></a>
          <a href="https://t.me/i_geeg_i"><img src="Telegram.png"/></a>
        </div>
        <h2>Really interested?</h2>
        <a href="https://t.me/i_geeg_i"><img src="photo1.png" id="me"/></a>
      </div>
    </main>
  );
}