import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import postService from './postService'

const initialState = {
  posts: [],
  post: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
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
    },
  },
  extraReducers: (builder) => {
      builder
         .addCase(addPost.pending, (state) => {
             state.isLoading = true
         })
         .addCase(addPost.fulfilled, (state, action) => {
             state.isLoading = false
             state.isSuccess = true
         })
         .addCase(addPost.rejected, (state, action) => {
             state.isLoading = false
             state.isError = true
             state.message = action.payload
         })
  }
})

export const {reset} = postSlice.actions
export default postSlice.reducer