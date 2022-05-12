import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPost, reset } from '../features/posts/postSlice'

import '../style/singlePost.css'
const SinglePost = () => {
  const { postId } = useParams()
  const dispatch = useDispatch()
  const { post, isLoading, singlePostSuccess, isError, message } = useSelector(
    (state) => state.post
  )
  useEffect(() => {
    dispatch(getPost(postId))
  }, [dispatch, postId])

  return (
    <section className='singlepost-section'>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        singlePostSuccess && (
          <div className='singlepost-content'>
            <h3>{post.post.title}</h3>
            <img className='img-singlepost' src={post.post.imageUrl} alt={post.post.title} />
            <p className='description-singlepost'>{post.post.description}</p>
          </div>
        )
      )}
    </section>
  )
}

export default SinglePost
