import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
<<<<<<< HEAD
        signInStart: (state) => {
=======
        signInStart: (state) => {
>>>>>>> e8ca77a72d1a2fa40e801419e3f878764916c325
            state.loading = true;
        },
        signInSuccess: (state,action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state,action) => {
<<<<<<< HEAD
            state.error = action.payload;
=======
            state.currentUser = action.payload;
>>>>>>> e8ca77a72d1a2fa40e801419e3f878764916c325
            state.loading = false;
    }
}
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

<<<<<<< HEAD
export default userSlice.reducer; 
=======
export default userSlice.reducer;
>>>>>>> e8ca77a72d1a2fa40e801419e3f878764916c325
