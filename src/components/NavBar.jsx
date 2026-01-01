import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function NavBar({ page, setPage }) {
  const navigate = useNavigate()

  const items = [
    { key: 'home', icon: 'bi-house' },
    { key: 'favorites', icon: 'bi-heart' },
    { key: 'upload', icon: 'bi-camera' }, //'bi-upload'
    { key: 'menu', icon: 'bi-fork-knife' },
    { key: 'profile', icon: 'bi-person' }
  ]

  const handleNav = (key) => {
    setPage(key)
    // navigate(`/${key}`) // Uncomment if using actual routing
  }

  return (
    <nav className="bottom-nav">
      {items.map((it) => (
        <button 
          key={it.key} 
          className={`nav-btn ${page === it.key ? 'active' : ''}`} 
          onClick={() => handleNav(it.key)} 
          aria-label={it.key}
        >
          <i className={`bi ${it.icon}`}></i>
        </button>
      ))}
    </nav>
  )
}
