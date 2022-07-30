import { configureStore } from "@reduxjs/toolkit";
import pageReducer, { PageState } from "./page";

export type Store = {
  page: PageState,
}

export default configureStore<Store>({
  reducer: {
    page: pageReducer,
  },
})
