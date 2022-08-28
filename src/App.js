import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Shortener from './pages/Shortener'
import UrlRedirect from './pages/UrlRedirect'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Shortener/>} />
          <Route path = "/:id" element={<UrlRedirect/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
