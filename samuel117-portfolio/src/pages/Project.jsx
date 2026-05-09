import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const proyectos = {
  1: {
    titulo: '¿Por qué la gallina cruzó la calle?',
    descripcion: [
      'In January 2024, I participated in the Global Game Jam where I developed "¿Por qué la gallina cruzó la calle?", a 2D arcade game created using Unity and C#. My contributions included developing the code for character movement and implementing player respawn functionality. I also designed enemies that actively track the player. Additionally, I incorporated animations for both characters and enemies.',
      'The project earned recognition from Amber Studio, who awarded us for excellence in narrative, development management, and production, highlighting our team\'s ability to deliver a compelling and well-managed gaming experience.',
    ],
    imagenes: [
      'DIPLOMA GGJ 2024 - SAMUEL PADILLA ESQUEDA-1.png',
      'DIPLOMA_DEVELOPMENT_MANAGEMENT_-_POR_QUE_LA_GALLINA_CRUZO_LA_CALLE-1.png',
      'DIPLOMA_NARRATIVA_-_POR_QUE_LA_GALLINA_CRUZO_LA_CALLE-1.png',
      'DIPLOMA_PRODUCCION_-_POR_QUE_LA_GALLINA_CRUZO_LA_CALLE-1.png',
    ],
    aboutGame: 'The theme of the jam was "Make Me Laugh," and it lasted for two days. Our game aimed to adapt the "Why did the chicken cross the road?" joke into a format where each level featured a different punchline.',
    video: 'https://www.youtube.com/embed/rQMkrl0kuTA?si=-Jnrmyjom_7TaJAi',
    links: [
      { texto: '¿Por qué la gallina cruzó la calle? on itch.io', url: 'https://kechus.itch.io/por-qu-la-gallina-cruz-la-calle' },
      { texto: 'GGJ 2024 page', url: 'https://globalgamejam.org/games/2024/por-que-la-gallina-cruzo-la-calle-1' },
    ],
  },
  2: {
    titulo: 'Pan y Cebolla',
    descripcion: [
      'For a school assignment, I developed "Pan y Cebolla Demo," a 2D platform video game, from April to June 2023 using Unity and C#. In this project, I was responsible for designing and integrating core gameplay mechanics, including player movement, dash functions, and shooting capabilities. Additionally, I crafted and coded the game\'s introductory animation.',
    ],
    imagenes: ['pyc1.jpg', 'pyc2.jpg', 'pyc3.jpg', 'pyc4.jpg'],
    aboutGame: '"Pan y Cebolla" is a 2D platformer where a really hungry protagonist wakes up and embarks on an adventure to gather the best ingredients to make the perfect sandwich. The game was made using free assets.',
    video: 'https://drive.google.com/file/d/1sze5-z9lJWKYaYOi0I0QvQxxNZ2O67qD/preview',
    links: [
      { texto: 'Game repository', url: 'https://github.com/SamuelA01641383/Pan-y-Cebolla' },
      { texto: 'Game ZIP on Drive', url: 'https://drive.google.com/drive/folders/1iXHmLPOC4vRDvz251GbqZhiB3jzRJuFs?usp=sharing' },
    ],
  },
  3: {
    titulo: 'Knight',
    descripcion: [
      'In August 2021, I participated in the "Tu Juego a Juicio Jam 2021" and developed "Knight," a 2D runner video game using Unity and C#. I implemented the physics systems for obstacles, enabling interactions between the player character and the environment. Additionally, I created and programmed dynamic obstacle animations.',
    ],
    imagenes: ['K1.PNG', 'k2.PNG', 'k3.PNG', 'k4.PNG'],
    aboutGame: 'The jam theme was "Too Long," and it lasted for one week. "Knight" is a 2D platformer runner where a knight competes on an obstacle course to win a spear. For this challenge, he uses his uncomfortably long sword.',
    video: 'https://drive.google.com/file/d/1P_xEOW3i4Kvttfu9sAakTq6bfbNh0V3F/preview',
    links: [
      { texto: 'Knight on itch.io', url: 'https://kechus.itch.io/knight' },
      { texto: 'Game Repository', url: 'https://github.com/Samuel117/Knight?tab=readme-ov-file' },
    ],
  },
  4: {
    titulo: 'Fix-it',
    descripcion: [
      'For my high school graduation project, I created "Fix-it," a 2D platform video game using Unity and C# from December 2020 to June 2021.',
      'I designed and implemented the character upgrade screen, ensuring synchronized with the player\'s progress in real-time. This feature allowed players to enhance their characters as they advanced through the game. Additionally, I crafted enemy behaviors, including movement patterns, attack patterns, and player detection mechanisms.',
      'I also created the layouts for all stages, aligning them with the thematic concepts of each level and developed movement and attack scripts for the player characters, integrating different special attacks for each playable character.',
      'I designed and coded multiple mini-games requiring coordinated keyboard inputs and featuring randomly generated object positions or patterns. Lastly, I implemented a binary file-based player data storage system, ensuring that player progress was saved and accessible.',
    ],
    imagenes: ['F1.PNG', 'F2.PNG', 'F3.PNG', 'F4.PNG', 'F5.PNG', 'F6.PNG'],
    aboutGame: '"Fix-it" is a 2D platformer game inspired by the Mega Man saga. In this game, you play as a robot responsible for repairing buildings. When robots begin destroying buildings without warning, it becomes your duty to stop them, repair the buildings, and uncover the reason behind their actions.',
    video: 'https://drive.google.com/file/d/1jskGptWVq8SdMo33VYk-iuHjBnO9AG-H/preview',
    links: [
      { texto: 'Game ZIP on Drive', url: 'https://drive.google.com/drive/folders/1KkIKydwC9JF8jaY6MA9B-3hV_duJbEcG?usp=sharing' },
      { texto: 'Game Repository', url: 'https://github.com/Samuel117/Fix-it' },
    ],
  },
}

function Project() {
  const { id } = useParams()
  const proyecto = proyectos[id]

  // null = lightbox cerrado, "ruta/imagen.png" = lightbox abierto mostrando esa imagen
  const [imagenAbierta, setImagenAbierta] = useState(null)

  if (!proyecto) {
    return (
      <div className="container">
        <p>Proyecto no encontrado.</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="container">
      <Link to="/">← Volver</Link>
      <h1>{proyecto.titulo}</h1>

      {proyecto.descripcion.map((parrafo, index) => (
        <p key={index}>{parrafo}</p>
      ))}

      <div className="contenedor">
        {proyecto.imagenes.map((img, index) => (
          <img
            key={index}
            className="imagen"
            src={img}
            alt={`Imagen ${index + 1}`}
            onClick={() => setImagenAbierta(img)}
          />
        ))}
      </div>

      {imagenAbierta && (
        <div className="imagen-ampliada" onClick={() => setImagenAbierta(null)}>
          <span className="cerrar">X</span>
          <img src={imagenAbierta} alt="Imagen ampliada" />
        </div>
      )}

      <h2>About the Game</h2>
      <p>{proyecto.aboutGame}</p>

      <div className="contenedor-video">
        <iframe src={proyecto.video} allowFullScreen title={proyecto.titulo} />
      </div>

      <h2>Play Now!</h2>
      <ul>
        {proyecto.links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noreferrer">{link.texto}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Project
