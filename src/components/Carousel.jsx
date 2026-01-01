import React, { useState, useRef, useEffect } from 'react'

export default function Carousel({ images = [], allImages = [], liked = new Set(), toggleLike }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const carouselRef = useRef(null)

  const currentUrl = images[currentIndex];
  const imageData = allImages.find(img => img.url === currentUrl);
  const isLiked = imageData ? liked.has(imageData.id) : false;

  const updateCarousel = (index) => {
    let newIndex = index
    if (newIndex >= images.length) newIndex = 0
    if (newIndex < 0) newIndex = images.length - 1
    setCurrentIndex(newIndex)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX
    touchEndX.current = null
  }

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX
    handleSwipe()
  }

  const handleSwipe = () => {
    const swipeThreshold = 40
    const difference = touchStartX.current - touchEndX.current
    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) updateCarousel(currentIndex + 1)
      else updateCarousel(currentIndex - 1)
    }
  }

  useEffect(() => {
    const element = carouselRef.current
    let lastTouchEnd = 0
    const handleDoubleTap = (e) => {
      const now = Date.now()
      if (now - lastTouchEnd <= 300) e.preventDefault()
      lastTouchEnd = now
    }
    if (element) {
      element.addEventListener('touchend', handleDoubleTap, false)
      return () => element.removeEventListener('touchend', handleDoubleTap, false)
    }
  }, [])

  if (!images || images.length === 0) {
    return <div className="carousel-main" style={{minHeight:200,display:'flex',alignItems:'center',justifyContent:'center'}}>No Images have been uploaded yet</div>
  }

  return (
    <div className="carousel-outer-wrapper">
      {/* 1. The Image Box */}
      <div className="carousel-main" ref={carouselRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} tabIndex={0} role="region">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="main-image" loading="lazy" />
        
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={() => updateCarousel(currentIndex - 1)}>❮</button>
          <button className="carousel-btn" onClick={() => updateCarousel(currentIndex + 1)}>❯</button>
        </div>
      </div>

      {/* 2. The Like Area (Now Below) */}
      {imageData && (
        <div className="carousel-footer-info d-flex justify-content-between align-items-center">
          <div className="likes-count">{imageData.likes} ❤️</div>
          <button 
            className={`btn rounded btn-sm ${isLiked ? 'btn-danger' : 'btn-outline-secondary'}`} 
            onClick={() => toggleLike(imageData.id)}
          >
            {isLiked ? 'Liked' : 'Like'}
          </button>
        </div>
      )}
    </div>
  )
}