import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deletePost, getPosts, reset } from '../features/posts/postSlice'

import '../style/postsPage.css'
const Posts = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { posts, isLoading, isSuccess, deletePostSuccess, isError, message } = useSelector(
    (state) => state.post
  )

  useEffect(() => {
    dispatch(getPosts())
    if(deletePostSuccess){
      dispatch(reset())
      dispatch(getPosts())
    }
  }, [dispatch, isSuccess, deletePostSuccess])

  const handleViewPost = (postId) => {
    dispatch(reset())
    navigate(`/post/${postId}`)
  }

  const handleUpdatePost = (postId) => {
    dispatch(reset())
    navigate(`/post/update/${postId}`)
  }

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId))
    dispatch(getPosts())
  }
  return (
    <section className='posts-section'>
      <div className='post-main_container'>
        <div className='post-container'>
          {isLoading ? (
            <p>loading ...</p>
          ) : isError ? (
            <p>{message}</p>
          ) : 
            isSuccess && (
              <div className='post-content'>
                <table>
                  <tr>
                    <th>IMAGE</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                  </tr>
                  {posts.posts.map((post) => (
                    <tr>
                      <td><img className='img-post' src={post.imageUrl} alt={post.title}  /></td>
                      <td>{post.title}</td>
                      <td>{post.description}</td>
                      <td>
                        <button
                        className='btn-view'
                          onClick={() => {
                            handleViewPost(post._id)
                          }}
                        >
                          View Post
                        </button>
                      </td>
                      <td>
                        <button
                        className='btn-update'
                          onClick={() => {
                            handleUpdatePost(post._id)
                          }}
                        >
                          Update Post
                        </button>
                      </td>
                      <td>
                        <button className='btn-delete' onClick={() => handleDeletePost(post._id)}>
                          DELETE POST
                        </button>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Posts
