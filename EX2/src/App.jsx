import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import TodoPage from './TodoPage'
import UserList from './UserList' // Ton fichier s'appelle UserList.jsx dans la barre latérale

export default function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '30px auto', fontFamily: 'sans-serif' }}>
      <Navbar />
      <div style={{ marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </div>
  )
}