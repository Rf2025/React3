import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Route.jsx'
import Counter from './Counter.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes/>
    <Counter/>
  </React.StrictMode>,
)
