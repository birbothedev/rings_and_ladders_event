import { NavBar } from './components/NavBar'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { HomePage } from './pages/HomePage'
import { TeamPage } from './pages/TeamPage'
import { AdminPage } from './pages/AdminPage'
import { TeamFetch } from './components/Contexts/TeamContext'

function App() {
  return (
  <>
  <BrowserRouter>
    <NavBar />
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/teampage" element={<TeamPage />} />

      <Route path="/adminpage" 
        element={
          <TeamFetch>
            <AdminPage />
          </TeamFetch>
        }
      />

    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
