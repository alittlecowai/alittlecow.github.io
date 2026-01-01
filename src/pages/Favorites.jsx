import React from 'react'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>

export default function Favorites({ images = [], liked = new Set(), toggleLike }) {
  // sort by likes desc and show top 20
  const sorted = [...images].sort((a, b) => b.likes - a.likes).slice(0, 20)
  return (
    <main className="page card">
      <h2 className="page-title">Leaderboard</h2>
      <p className="text-muted mb-0">These are the Top 20.</p>
      <p className="text-muted mb-0">Vote for your favourite!</p>

      <div className="list-group mt-3">
        {sorted.map((img, idx) => (
          <div className="list-group-item d-flex align-items-center" key={img.id} style={{paddingRight: 0, paddingLeft: 0}}>
            <img src={img.url} alt={`Top ${idx + 1}`} className="leader-thumb rounded me-3" />
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="fw-bold">{img.likes} ❤️</div>
                  <div className="fw-bold">{img.score} Points</div>
                </div>
                <div>
                  <button 
                    className={`btn btn-sm btn-like-round ${liked.has(img.id) ? 'btn-danger' : 'btn-outline-primary'}`} 
                    onClick={() => toggleLike(img.id)}
                  >
                    <i className="bi bi-heart-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {sorted.length === 0 && <p className="text-muted">No images yet.</p>}
      </div>
    </main>
  )
}
