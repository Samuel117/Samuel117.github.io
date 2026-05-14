import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Project from './pages/Project'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyecto/:id" element={<Project />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
      </Routes>
    </HashRouter>
  )
}

export default App
