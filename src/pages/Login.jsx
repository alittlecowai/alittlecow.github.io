import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ phone, setPhone, onLogin }) {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const p = phone || 'guest'
    if (onLogin) onLogin(p)
    navigate('/home')
  }

  return (
    <div className="login-hero" 
         style={{backgroundImage: `url(https://picsum.photos/id/1025/1080/1920)`}}>

      <div className="login-header">
        Welcome to<br/>
        <span>Wei Lun & Li Lin's</span><br/>
        Wedding!
      </div>

      
      <div className="login-container">
        {/* The Glassmorphism Pop-up Card */}
        <div className="login-popup-card glass-blur shadow">
          <h1 className="hero-title text-dark mb-4">Log in</h1>
          
          <form onSubmit={handleLogin} className="w-100">
            <div className="form-row mb-3">
              <input 
                aria-label="Phone number" 
                placeholder="Phone Number" 
                value={phone} 
                onChange={(e)=>setPhone(e.target.value)} 
                className="form-control" 
              />
            </div>
            
            <div className="hero-actions mt-4">
              <button type="submit" className="login-outline py-2">LOG IN</button>
            </div>
          </form>
        </div>        
      </div>
    </div>
  )
}