import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import AddPost from './pages/AddPost'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Posts from './pages/Posts'
import Profile from './pages/Profile'
import Register from './pages/Register'
import SinglePost from './pages/SinglePost'
import UpdatePost from './pages/UpdatePost'

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
            {/* Posts */}
            <Route path='/posts' element={<PrivateRoute />}>
              <Route path='/posts' element={<Posts />} />
            </Route>
            {/* single post */}
            <Route path='/post/:postId' element={<PrivateRoute />}>
              <Route path='/post/:postId' element={<SinglePost />} />
            </Route>
            {/* update post */}
            <Route path='/post/update/:postId' element={<PrivateRoute />}>
              <Route path='/post/update/:postId' element={<UpdatePost />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
