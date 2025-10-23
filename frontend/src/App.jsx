import { NavBar } from './components/NavBar'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { HomePage } from './pages/HomePage'
import { TeamPage } from './pages/TeamPage'
import { AdminPage } from './pages/AdminPage'

function App() {
  return (
  <>
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/teampage" element={<TeamPage />} />
      <Route path="/adminpage" element={<AdminPage />} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
