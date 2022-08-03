import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import pageReducer from "./page";

const store = configureStore({
  reducer: {
    page: pageReducer,
  },
})

export default store;

export type Store = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector;
