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

const postService = {addPost}

export default postService