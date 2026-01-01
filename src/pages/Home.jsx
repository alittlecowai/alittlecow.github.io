import React, { useState } from 'react'
import Carousel from '../components/Carousel'

export default function Home({ images = [], liked = new Set(), toggleLike }) {
  // State to track which image is being enlarged
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <main className="page card">
      <header className="d-flex flex-column align-items-start mb-3">
        <h2 className="page-title">Discover</h2>
        <h3 className="section-title">Recent Memories</h3>
      </header>

      <section className="discover mb-4">
        {/* <Carousel images={images.slice(0,5).map(img => img.url)} /> */}
        <Carousel 
          images={images.slice(0,5).map(img => img.url)} 
          allImages={images} 
          liked={liked} 
          toggleLike={toggleLike} 
        />
      </section>

      <section className="featured">
        <h3 className="section-title">Featured</h3>
        <div className="row g-3">
          {images.map((img, i) => (
            <div className="col-6 col-md-4 col-lg-3" key={img.id}>
              <div className="card image-card position-relative shadow-none border-0">
                {/* Trigger Pop-up on click */}
                <img 
                  src={img.url} 
                  alt={`Uploaded ${i+1}`} 
                  className="card-img-top rounded" 
                  style={{ cursor: 'pointer' }} 
                  onClick={() => setSelectedImg(img)}
                />
                <div className="card-body d-flex justify-content-between align-items-center p-2">
                  <div className="small">{img.likes} ❤️</div>
                  <button 
                    className={`btn rounded btn-sm ${liked.has(img.id) ? 'btn-danger' : 'btn-outline-secondary'}`} 
                    onClick={() => toggleLike(img.id)}
                  >
                    {liked.has(img.id) ? 'Liked' : 'Like'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Pop-up Modal --- */}
      {selectedImg && (
        <div className="img-pop-overlay" onClick={() => setSelectedImg(null)}>
          <div className="img-pop-content" onClick={(e) => e.stopPropagation()}>
            <button className="img-pop-close" onClick={() => setSelectedImg(null)}>&times;</button>
            <img src={selectedImg.url} alt="Enlarged" className="img-pop-main" />
            <div className="text-white mt-3 text-center cursive-font">
              {selectedImg.likes}❤️ for this memory
            </div>
          </div>
        </div>
      )}
    </main>
  )
}