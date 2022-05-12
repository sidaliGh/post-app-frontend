import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import postService from './postService'

const initialState = {
  posts: [],
  post: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  addPostSuccess: false,
  singlePostSuccess: false,
  deletePostSuccess: false,
  updatePostSuccess: false
}

//add post
export const addPost = createAsyncThunk(
  'post/addPost',
  async (post, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.addPost(post, token)
    } catch (error) {
      const message = error.response.data.message
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//update Post
export const updatePost = createAsyncThunk('post/updatePost', async (post, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await postService.updatePost(post, token)
  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})

//get posts
export const getPosts = createAsyncThunk(
  'post/getPosts',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.getPosts(token)
    } catch (error) {
      const message = error.response.data.message
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//get post

export const getPost = createAsyncThunk(
  'post/getPost',
  async (postId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await postService.getPost(postId, token)
    } catch (error) {
      const message = error.response.data.message
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//DELETE POST
export const deletePost = createAsyncThunk('post/deletePost', async (postId, thunkAPI) => {
  try{
    const token = thunkAPI.getState().auth.user.token
    return await postService.deletePost(postId, token)
  } catch (error) {const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)}
})

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.posts = []
      state.post = {}
      state.isError = false
      state.isSuccess = false
      state.message = ''
      state.addPostSuccess = false
      state.singlePostSuccess = false
      state.deletePostSuccess = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.addPostSuccess = true
      })
      .addCase(addPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      //update post
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false
        state.updatePostSuccess = true
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      //getPosts
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = action.payload
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      //getPost
      .addCase(getPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.singlePostSuccess = true
        state.post = action.payload
      })
      .addCase(getPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      //delete post
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false
        state.deletePostSuccess = true
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = postSlice.actions
export default postSlice.reducer
