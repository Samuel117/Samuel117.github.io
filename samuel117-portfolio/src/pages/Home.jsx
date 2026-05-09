import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <h2>About Me</h2>
      <p>
        Hello! I'm an enthusiastic student deeply passionate about game development and game design. Currently,
        I am pursuing a Bachelor of Science in Computer Science and Technology, aiming to build a solid foundation in
        creating innovative and engaging video games. I'm eager to explore opportunities that allow me to
        grow and contribute creatively to the world of gaming.
      </p>

      <h2>Game Projects</h2>
      <div className="projects">
        <ul>
          <h3>2024</h3>
          <li><Link to="/proyecto/1">¿Por qué la gallina cruzó la calle? (Game Jam)</Link></li>
          <h3>2023</h3>
          <li><Link to="/proyecto/2">Pan y Cebolla (Demo)</Link></li>
          <h3>2021</h3>
          <li><Link to="/proyecto/3">Knight (Game Jam)</Link></li>
          <li><Link to="/proyecto/4">Fix-it (High School Graduation Project)</Link></li>
        </ul>
      </div>

      <a href="https://github.com/Samuel117">You can find all the games repositories here</a><br />

      <h2>Other Projects</h2>
      <p>
        I am working on updating this page with all my projects, not just my game development projects! For now,
        here are the repositories for each project I am planning to add:
      </p>

      <div className="projects">
        <ul>
          <li><a href="https://github.com/SantiagoVeraEspinoza/oracle-chatbot">Oracle Java Bot</a></li>
          <li><a href="https://github.com/SantiagoVeraEspinoza/Banco_de_Medicamentos_App/tree/main">Medicine Bank IOS App</a></li>
          <li><a href="https://github.com/SamuelA01641383/Biblioteca-Meiquer/tree/main">Biblioteca Meiquer User Web Page</a></li>
        </ul>
      </div>

      <h2>Contact</h2>
      <p>Email: <a href="mailto:samuel.padilla45@gmail.com">samuel.padilla45@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/samuel-padilla-esqueda-04b5ab22a/">Samuel Padilla Esqueda</a></p>
    </div>
  )
}

export default Home
