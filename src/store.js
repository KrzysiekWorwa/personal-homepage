import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "./common/themeSlice";
import saga from "./saga";

const sagaMiddleware = createMiddleware();

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

export default store;