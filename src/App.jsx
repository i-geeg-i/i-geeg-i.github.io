import { useState } from 'react'
import me1 from '/me1.png'
import me2 from '/me2.png'
import me3 from '/me3.png'
import me4 from '/me4.png'
import me5 from '/me5.png'
import mail from '/mail.png'
import telegram from '/telegram.png'
import css from '/css.png'
import js from '/js.png'
import html from '/html.png'
import vite from '/vite.png'
import docker from '/docker.png'
import flask from '/flask.png'
import py from '/py.png'
import react from '/react.png'
import figma from '/figma.png'

import './App.css'

function App() {

  return (
    <>
      <div className='block' id='start'>
        <div className='left'>
          <h1 className='title'>GEEG</h1>
          <h2 className='title'>portfolio</h2>
          <p className='minus'>
            Привет! Если мы не знакомы, меня зовут Егор, я фронтенд разработчик. Сейчас я в поиске работы, посмотри моё портфолио и свяжись со мной, если интересно :)  
          </p>
        </div>
        <div className='right'>
          <img src={me1} className="photo" alt="My picture in anime style by AI" />
        </div>
      </div>
      <div className='block reverse'>
        <div className='left'>
          <img src={me2} className="photo" alt="My picture in anime style by AI" />
        </div>
        <div className='right'>
          <p className='plus'>
            Я родился и вырос в небольшом городке, меня всегда привлекала идея создавать или делать что-то хорошее для всех людей. Так я открыл для себя программирование.
          </p>
          <h2 style={{marginTop: '40px'}}>Основной стэк</h2>
          <div className='stack'>
            <img src={html} className="stack" alt="HTML logo" />
            <img src={css} className="stack" alt="CSS logo"/>
            <img src={js} className="stack" alt="JS logo" />
            <img src={react} className="stack" alt="React logo" />
            <img src={vite} className="stack" alt="Vite logo" />
          </div>
          <h3>Так же знаю</h3>
          <div className='stack'>
            <img src={py} className="stack" alt="Python logo" />
            <img src={docker} className="stack" alt="Docker logo" />
            <img src={figma} className="stack" alt="Figma logo"  />
            <img src={flask} className="stack" alt="Flask logo" />
          </div>
        </div>
      </div>
      <div className='block' id='education'>
        <div className='left' style={{width: '60%'}}>
          <h2>Образование</h2>
          <div className='list'>
            <div className='list-block'>
              <h4>2023-2025</h4>
              <div className='text'>
                <h4>Университет Иннополис</h4>
                <p>Учился 2 года по программе бакалавриата Software Development</p>
              </div>
            </div>
            <div className='list-block'>
              <h4>2025-2027</h4>
              <div className='text'>
                <h4>Набережночелнинский ГПУ</h4>
                <p>Учусь на 3 курсе по направлению Информатика в дизайне</p>
              </div>
            </div>
          </div>
        </div>
        <div className='right' style={{width: '40%'}}>
          <img src={me3} className="photo" alt="My picture in anime style by AI" />
        </div>
      </div>
      <div className='block reverse'>
        <div className='left'>
          <img src={me4} className="photo" alt="My picture in anime style by AI" />
        </div>
        <div className='right'>
          <p className='plus'>
            Я делал  несколько интересных проектов. Здесь про самые релевантные
          </p>
          <h2 style={{marginTop: '40px'}}>Проекты</h2>
          <div className='projects'>
            <h4>NailService</h4>
            <a> React, TypeScript, Vite, Flask, PostgreSQL</a>
            <p>Fullstack-приложение для онлайн-записи на маникюр и педикюр с аутентификацией, интерфейсом пользователя и администратора, REST API и базой данных</p>
          </div>
          <div className='projects'>
            <h4>Truth or Dare</h4>
            <a> React, CSS, Vite</a>
            <p>Одностраничная онлайн-игра «Правда или действие» с тремя уровнями сложности, адаптивным UI и маршрутизацией</p>
          </div>
          <div className='projects'>
            <h4>Coffee shop bonus system</h4>
            <a> React, Supabase</a>
            <p>Командная работа. Веб-приложение для бонусной системы и заказов: корзина, подсчёт суммы, история покупок, улучшенный адаптивный дизайн</p>

          </div>
        </div>
      </div>
      <div className='block' id='contact'>
        <div className='left'>
         <p className='minus'>Если моё мини резюме тебе понравилось, напиши мне</p>
         <div className='contact'>
            <img src={mail} className='icon' alt='Mail icon'></img>
            <h2><a href='mailto:glebov.el2005@yandex.ru' target="_blank" rel="noopener noreferrer">glebov.el2005@yandex.ru</a></h2>
          </div>
          <div className='contact'>
            <img src={telegram} className='icon' alt='Telegram icon'></img>
            <h2><a href='https://t.me/i_geeg_i' target="_blank" rel="noopener noreferrer">i-geeg-i</a></h2>
          </div>
        </div>
        <div className='right'>
          <img src={me5} className="photo" alt="My picture in anime style by AI" />
        </div>
      </div>
    </>
  )
}

export default App
