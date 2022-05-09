import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../features/auth/authSlice'

import '../style/registerPage.css'
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if(isError){
      console.log(message)
    }

    if(isSuccess && user){
      navigate('/')
      dispatch(reset())
    }

    
  }, [dispatch, user, isSuccess, isError, message, navigate])

  const onChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const userData = { name, email, password }
    dispatch(register(userData))
  }
  return (
    <section className='register-section'>
      <div className='register-main_container'>
        <div className='register-top_container'>
          <h1>Create a new account</h1>
        </div>
        <div className='register-bottom_container'>
          <form onSubmit={onSubmit} className='form-container'>
            <input
              type='text'
              className='form-input'
              name='name'
              value={name}
              placeholder='Name'
              onChange={onChange}
            />
            <input
              type='email'
              className='form-input'
              name='email'
              value={email}
              placeholder='Email'
              onChange={onChange}
            />
            <input
              type='password'
              className='form-input'
              name='password'
              value={password}
              placeholder='Password'
              onChange={onChange}
            />
            <button className='btn-form'>Register</button>
          </form>
          {isError && (<p className='error-message_form'>{message}</p>)}
        </div>
      </div>
    </section>
  )
}

export default Register
