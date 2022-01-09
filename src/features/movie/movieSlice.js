import { createSlice } from '@reduxjs/toolkit'

// initial empty state when app is initialised 
const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null, 
};

// once we get the data from firebase we will store it in here
// reducers tell it what to do 
const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        },
    },
});

//export actions 
export const { setMovies } = movieSlice.actions

//export selectors
export const selectRecommend = (state) => state.movie.recommend
export const selectNewDisney = (state) => state.movie.newDisney
export const selectOriginal = (state) => state.movie.original
export const selectTrending = (state) => state.movie.trending

export default movieSlice.reducer;