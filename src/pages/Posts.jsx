import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../features/posts/postSlice'

const Posts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { posts, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.post
  )

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  return (
    <section className='posts-section'>
      <div className='post-main_container'>
        <div className='post-container'>
          {isLoading ? (
            <p>loading ...</p>
          ) : isError ? (
            <p>{message}</p>
          ) : (
            isSuccess && (
              <div className='post-content'>
                {' '}
                {posts.posts.map((post) => (
                  <>
                    <p>{post.title}</p>
                    <button
                      onClick={() => {
                        navigate(`/post/${post._id}`)
                      }}
                    >
                      View Post
                    </button>
                  </>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Posts
