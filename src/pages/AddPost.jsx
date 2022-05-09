import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import '../style/addPostPage.css'
import { reset, addPost } from '../features/posts/postSlice'

const AddPost = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: ''
    })

    const {title, description, imageUrl} = formData
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector(state => state.auth)
    const {isLoading, isSuccess, isError, message} = useSelector(state => state.post)

    useEffect(() => {
        if(isError){
            console.log(message)
        }
        if(isSuccess){
            navigate('/')
            dispatch(reset())
        }
    }, [dispatch, isSuccess, isError, navigate, message])


    const onChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    const onSubmit = (event) => {
        event.preventDefault()
        const postData = {title, description, imageUrl, userId: user.id}
        dispatch(addPost(postData))
      }
  return (
    <section className='addpost-section'>
      <div className='addpost-main_container'>
        <div className='addpost-top_container'>
          <h1>Create a new Post</h1>
        </div>
        <div className='addpost-bottom_container'>
          <form onSubmit={onSubmit} className='form-container'>
            <input
              type='text'
              className='form-input'
              name='title'
              value={title}
              placeholder='Title'
              onChange={onChange}
            />
            <input
              type='text'
              className='form-input'
              name='description'
              value={description}
              placeholder='Description'
              onChange={onChange}
            />
            <input
              type='text'
              className='form-input'
              name='imageUrl'
              value={imageUrl}
              placeholder='ImageUrl'
              onChange={onChange}
            />
            <button className='btn-form'>Add-Post</button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default AddPost