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
  specRu?: string;
  timeRu?: string;
  discRu?: string;
}

interface Props {
  items: Item[];
  text: string;
}

export default function Home() {
  const who: Item[] = [
    {
      spec: 'Student',
      time: '2023 - 2025',
      disc: 'I have been studying in a bachelor program at Innopolis University for 2 years.',
      specRu: 'Студент',
      timeRu: '2023 - 2025',
      discRu: 'Я учился в бакалавриате Университета Иннополис два года.',
    },
    {
      spec: 'Student',
      time: '2025 - 2027',
      disc: 'I’m going to finish my bachelor program at NGPI.',
      specRu: 'Студент',
      timeRu: '2025 - 2027',
      discRu: 'Планирую закончить бакалавриат в НГПУ.',
    },
    {
      spec: 'Front-end developer',
      time: '2020 - now',
      disc: 'Started learning front-end on my own in school. Enhanced my knowledge at university. Worked on some interesting projects.',
      specRu: 'Фронтенд-разработчик',
      timeRu: '2020 - сейчас',
      discRu: 'Начал изучать фронтенд самостоятельно в школе. Углубил знания в университете. Участвовал в интересных проектах.',
    },
    {
      spec: 'Back-end developer',
      time: '2018 - now',
      disc: 'Started by learning Python as a kid. Continued at university.',
      specRu: 'Бэкенд-разработчик',
      timeRu: '2018 - сейчас',
      discRu: 'Начал изучать Python в детстве. Продолжил в университете.',
    },
    {
      spec: 'UX/UI designer',
      time: '2024 - now',
      disc: 'Learned some basics at university and became interested in it.',
      specRu: 'UX/UI дизайнер',
      timeRu: '2024 - сейчас',
      discRu: 'Изучал основы в университете и заинтересовался этим направлением.',
    },
    {
      spec: 'English speaker',
      time: '2012 - now',
      disc: 'Why not? I proved my B2 level with SELT.',
      specRu: 'Англоязычный',
      timeRu: '2012 - сейчас',
      discRu: 'Почему бы и нет? Подтвердил уровень B2 по экзамену SELT.',
    },
    {
      spec: 'Russian speaker',
      time: '2005 - now',
      disc: 'I’m a native Russian speaker.',
      specRu: 'Русскоязычный',
      timeRu: '2005 - сейчас',
      discRu: 'Русский — мой родной язык.',
    },
  ];

  const what: Item[] = [
    {
      spec: 'Project for sales manager',
      time: '05.2024 - 07.2024',
      disc: 'Our team created a great website for customer convenience. Now they can manage their goods and supplies easily.',
      specRu: 'Проект для торгового представителя',
      timeRu: '05.2024 - 07.2024',
      discRu: 'Наша команда создала удобный сайт для клиента. Теперь они могут легко управлять товарами и поставками.',
    },
    {
      spec: 'Coffeehouse Website',
      time: '05.2024 - 07.2024',
      disc: 'We created a cozy website and UX/UI design for a mobile app.',
      specRu: 'Сайт кофейни',
      timeRu: '05.2024 - 07.2024',
      discRu: 'Создали уютный сайт и дизайн приложения для кофейни.',
    },
    {
      spec: 'Telegram Bot for Notifications',
      time: '09.2024 - now',
      disc: 'Maintaining a bot for foreign students at Innopolis. Implementing features on request.',
      specRu: 'Телеграм-бот для уведомлений',
      timeRu: '09.2024 - сейчас',
      discRu: 'Поддерживаю бота для иностранных студентов Иннополиса. Добавляю функции по запросу.',
    },
    {
      spec: 'Website for teacher',
      time: '05.2024 - 06.2024',
      disc: 'Website for selling courses online. Includes course registration for children.',
      specRu: 'Сайт преподавателя',
      timeRu: '05.2024 - 06.2024',
      discRu: 'Сайт для продажи курсов. Можно записать ребёнка на нужное занятие.',
    },
    {
      spec: 'HR App',
      time: '07.2024',
      disc: 'Micro test to assess personal traits of employees. Helpful for team formation.',
      specRu: 'HR-приложение',
      timeRu: '07.2024',
      discRu: 'Микротест для оценки качеств работников. Полезно при формировании команд.',
    },
    {
      spec: 'My Wishes',
      time: '09.2024 - now',
      disc: 'Website for creating personal wish lists. Still in progress.',
      specRu: 'Мои желания',
      timeRu: '09.2024 - сейчас',
      discRu: 'Сайт для составления личных списков желаний. В разработке.',
    },
    {
      spec: 'Small games',
      time: '2018 - 2020',
      disc: 'Very simple games (e.g., tic-tac-toe), made for learning.',
      specRu: 'Мини-игры',
      timeRu: '2018 - 2020',
      discRu: 'Простые игры (например, крестики-нолики), для обучения.',
    },
    {
      spec: 'Shamir Secret Sharing Algorithm',
      time: '2025',
      disc: 'A web app demonstrating how Shamir’s algorithm works. Created as a team.',
      specRu: 'Алгоритм разделения секрета Шамира',
      timeRu: '2025',
      discRu: 'Веб-приложение, демонстрирующее работу алгоритма Шамира. Командная работа.',
    },
  ];

  const why: Item[] = [
    {
      spec: 'Ready to learn',
      time: '⭐',
      disc: 'As a young person, I’m truly curious and eager to learn new things.',
      specRu: 'Готов учиться',
      timeRu: '⭐',
      discRu: 'Как молодой специалист, я всегда стремлюсь учиться новому.',
    },
    {
      spec: 'Team player',
      time: '⭐',
      disc: 'I enjoy working not only alone, but also in a team. I usually find common ground easily.',
      specRu: 'Командный игрок',
      timeRu: '⭐',
      discRu: 'Мне нравится работать в команде. Легко нахожу общий язык с коллегами.',
    },
    {
      spec: 'Hard worker',
      time: '⭐',
      disc: 'I love working on interesting tasks. My experience proves that I’m passionate about getting things done.',
      specRu: 'Трудолюбивый',
      timeRu: '⭐',
      discRu: 'Люблю интересные задачи. Мой опыт показывает, что я с энтузиазмом подхожу к работе.',
    },
    {
      spec: 'Friendly person',
      time: '⭐',
      disc: 'I have broad interests outside IT, so we can talk about many things in free time.',
      specRu: 'Дружелюбный человек',
      timeRu: '⭐',
      discRu: 'Интересуюсь многими темами помимо IT, так что всегда есть о чём поговорить.',
    },
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