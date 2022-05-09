import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import AddPost from './pages/AddPost'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Router>
        <div className='main-app-container'>
          <Header />
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* Profile */}
            <Route path='/profile' element={<PrivateRoute />}>
              <Route path='/profile' element={<Profile />} />
            </Route>
            {/* AddPost */}
            <Route path='/add-post' element={<PrivateRoute />}>
              <Route path='/add-post' element={<AddPost />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
