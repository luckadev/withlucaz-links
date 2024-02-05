import React from 'react'
import './App.css';

const BTN = (props = { url, title, description, icon }) => {
  return (
    <a href={props.url} className='btn-custom'>
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </a>
  )
}

const App = () => {
  return (
    <div className='container'>
      <div className='header'>
        <img src="./imgs/img.svg" alt="Minha foto de perfil" />
        <div>
          <h2>Lucas Ribeiro</h2>
          <p>Self-taught, Polyglot, Designer, Web Developer & Runner</p>
          <img src="./assets/imgs/flags.svg" alt="" />  
        </div>
      </div>

      <div className='principal'>
        {/* Criar um component BTN */}
        <BTN url="" title="Study Techniques" description="Get to know about all the study techniques i have been using for learning all the things i know so far." />
        <BTN url="" title="Templates" description="Templates on Notion APP for you to be more productive and more organised." />
        <BTN url="" title="My Book" description="Discover my perspective about being discipline and about the world. (lots of insights)" />
        <BTN url="" title="Books i recommend" description="Read them and become a better person." />
      </div>

    </div>
  )
}

export default App;