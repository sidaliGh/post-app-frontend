import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPost, reset } from '../features/posts/postSlice'

const SinglePost = () => {
  const { postId } = useParams()
  const dispatch = useDispatch()
  const { post, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.post
  )
  useEffect(() => {
    dispatch(getPost(postId))
  }, [dispatch, postId])

  if(isLoading){
      return <p>loading ...</p>
  }
  if(isSuccess && post){
      return (
          <section className='singlepost-section'>
              <div className='singlepost-content'><p>{post.post.title}</p></div>
          </section>
      )
  }
}

export default SinglePost
