import React from 'react'
import UploadForm from '../components/UploadForm'

export default function Upload({ onUpload }) {
  return (
    <main className="page card">
      <h2 className="page-title">Upload</h2>
      <UploadForm onUpload={onUpload} />
    </main>
  )
}
