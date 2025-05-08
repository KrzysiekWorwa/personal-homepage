import { createSlice } from "@reduxjs/toolkit";

const savedTheme = localStorage.getItem("isDarkTheme") === "true";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        isDarkTheme: savedTheme,
    },
    reducers: {
        toggleTheme: state => {
            state.isDarkTheme = !state.isDarkTheme;
            localStorage.setItem("isDarkTheme", state.isDarkTheme);
        },
    },
});

export const { toggleTheme, } = themeSlice.actions;

const selectThemeState = state => state.theme;

export const selectIsDarkTheme = state => selectThemeState(state).isDarkTheme;

export default themeSlice.reducer;