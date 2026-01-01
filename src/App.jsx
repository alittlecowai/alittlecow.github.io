import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import './index.css' //'./responsive.css'

import Login from './pages/Login'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Upload from './pages/Upload'
import Menu from './pages/Menu'
import Profile from './pages/Profile'
import NavBar from './components/NavBar'

const initialImages = [
  { id: 'img-1', url: 'https://picsum.photos/id/1011/800/600', likes: 5, score: 42 },
  { id: 'img-2', url: 'https://picsum.photos/id/1012/800/600', likes: 2, score: 15 },
  { id: 'img-3', url: 'https://picsum.photos/id/1013/800/600', likes: 8, score: 800 },
  { id: 'img-4', url: 'https://picsum.photos/id/1015/800/600', likes: 1, score: 4 },
  { id: 'img-5', url: 'https://picsum.photos/id/1016/800/600', likes: 3, score: 21 },
  { id: 'img-6', url: 'https://picsum.photos/id/1018/800/600', likes: 0, score: 9 },
  { id: 'img-7', url: 'https://picsum.photos/id/1020/800/600', likes: 4, score: 30 }
]

function AppRoutes({ images, setImages, liked, toggleLike, phone, setPhone, onLogout }) {
  return (
    <Routes>
      <Route path="/" element={<Login phone={phone} setPhone={setPhone} onLogin={(p) => { setPhone(p); }} />} />
      <Route path="/home" element={<Home images={images} liked={liked} toggleLike={toggleLike} />} />
      <Route path="/favorites" element={<Favorites images={images} liked={liked} toggleLike={toggleLike} />} />
      <Route path="/upload" element={<Upload onUpload={(f) => { const url = URL.createObjectURL(f); const obj = { id: `img-${Date.now()}`, url, likes: 0, score: 0 }; setImages(prev => [obj, ...prev]); }} />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/profile" element={<Profile phone={phone} onLogout={onLogout} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function Layout({ images, setImages, liked, toggleLike, phone, setPhone, onLogout }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <AppRoutes images={images} setImages={setImages} liked={liked} toggleLike={toggleLike} phone={phone} setPhone={setPhone} onLogout={onLogout} />
      {location.pathname !== '/' && (
        <NavBar page={location.pathname.replace(/^\//, '') || 'home'} setPage={(p) => navigate(`/${p}`)} />
      )}
    </>
  )
}

export default function App() {
  const [images, setImages] = useState(initialImages)
  const [liked, setLiked] = useState(new Set())
  const [phone, setPhone] = useState('')

  const toggleLike = (id) => {
    setLiked(prev => {
      const copy = new Set(prev)
      const already = copy.has(id)
      if (already) copy.delete(id); else copy.add(id)
      // update counts on images
      setImages(imgs => imgs.map(img => img.id === id ? { ...img, likes: already ? Math.max(0, img.likes - 1) : img.likes + 1 } : img))
      return copy
    })
  }

  const onLogout = () => { setPhone('') }

  return (
    <BrowserRouter>
      <div className="app-root">
        <Layout images={images} setImages={setImages} liked={liked} toggleLike={toggleLike} phone={phone} setPhone={setPhone} onLogout={onLogout} />
      </div>
    </BrowserRouter>
  )
}
