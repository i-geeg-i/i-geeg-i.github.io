import { useState } from 'react'
import reactLogo from './assets/react.svg'
import me1 from '/me1.png'
import me2 from '/me2.png'
import me3 from '/me3.png'
import me4 from '/me4.png'
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
  const [count, setCount] = useState(0)

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
            <img src={html} className="stack" alt="html" />
            <img src={css} className="stack" alt="css"/>
            <img src={js} className="stack" alt="js" />
            <img src={react} className="stack" alt="react" />
            <img src={vite} className="stack" alt="vite" />
          </div>
          <h3>Так же знаю</h3>
          <div className='stack'>
            <img src={py} className="stack" alt="python" />
            <img src={docker} className="stack" alt="docker" />
            <img src={figma} className="stack" alt="figma"  />
            <img src={flask} className="stack" alt="flask" />
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
    </>
  )
}

export default App
