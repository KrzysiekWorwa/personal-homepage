import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./common/themeSlice";


export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;