import React from 'react'

export default function Profile({ phone, onLogout }) {
  return (
    <main className="page card">
      <h2 className="page-title">Profile</h2>
      <p>Phone: {phone}</p>
      <div style={{marginTop:16}}>
        <button className="btn btn-primary rounded" onClick={onLogout}>Log out</button>
      </div>
    </main>
  )
}
