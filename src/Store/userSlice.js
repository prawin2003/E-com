import{createSlice} from'@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    isAuthenticated: false,
  },
  
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
      state.isAuthenticated = true;
    },
    
    clearUser: (state) => {
      state.userInfo = null;
      state.isAuthenticated = false;
    },
    
    updateUser: (state, action) => {
      if (state.userInfo) {
        state.userInfo = { ...state.userInfo, ...action.payload };
      }
    },
  },
});

export const { setUser, clearUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
