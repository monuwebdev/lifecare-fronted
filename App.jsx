import React from 'react'

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000"

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>🏥 Life Care Hospital</h1>
      <h2>Suman Medihub</h2>
      <p>Welcome to our hospital website. Providing world-class care globally.</p>
      <p>🔗 Backend API URL: {apiUrl}</p>
    </div>
  )
}

export default App
