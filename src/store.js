import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import themeReducer from "./common/themeSlice";
import personalHomepageReducer from './features/personalHomepage/personalHomepageSlice'
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        personalHomepage: personalHomepageReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;