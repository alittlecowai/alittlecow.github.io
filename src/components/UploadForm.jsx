import React, { useRef, useState } from 'react'

export default function UploadForm({ onUpload }) {
  const fileRef = useRef()
  const [preview, setPreview] = useState(null)
  const [fileName, setFileName] = useState('')
  const [uploaded, setUploaded] = useState(false)

  const handleFile = (e) => {
    const f = e.target.files && e.target.files[0]
    if (!f) return
    setPreview(URL.createObjectURL(f))
    setFileName(f.name)
  }

  const handleUpload = () => {
    const f = fileRef.current.files[0]
    if (f) {
      onUpload(f)
      setUploaded(true)
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    }
  }

  return (
    <div className="upload-form">
      <label className="form-label">Choose image</label>
      <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="form-control" />
      {preview && (
        <div className="preview mt-3">
          <img src={preview} alt={`preview of ${fileName}`} className="img-fluid rounded" />
        </div>
      )}
      {uploaded && (
        <div className="alert alert-success mt-3" role="status" aria-live="polite">
          ✓ Image uploaded successfully!
        </div>
      )}
      <div className="form-row mt-3">
        <button className="btn btn-primary rounded" onClick={handleUpload}>Upload</button>
      </div>
    </div>
  )
}
