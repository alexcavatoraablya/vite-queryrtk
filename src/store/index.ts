import {configureStore} from "@reduxjs/toolkit";
import {apiUsers} from "../services/apiUsers.ts";
import {apiPosts} from "../services/apiPosts.ts";
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
//створює та експортує централізоване сховище стану (store)
export const store = configureStore({
    reducer: {
        [apiUsers.reducerPath]: apiUsers.reducer,
        [apiPosts.reducerPath]: apiPosts.reducer,
    },
    //повертає масив забезпечуючи налаштування middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            apiUsers.middleware,
            apiPosts.middleware,
        )
})

//для полегшення роботи з типами
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector