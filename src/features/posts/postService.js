import axios from "axios";

//add post
const addPost = async (post, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post('http://localhost:5000/api/post/add-post', post, config)

    return response.data
}

//getPosts

const getPosts = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get('http://localhost:5000/api/post/posts', config)

    return response.data
}

//getPost

const getPost = async (postId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`http://localhost:5000/api/post/${postId}`, config)
    
    return response.data
}

const postService = {addPost, getPosts, getPost}

export default postService