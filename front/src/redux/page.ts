import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Artwork } from '../types';
import * as api from '../api';
import { Store } from './store';

const ENTRIES_PER_PAGE = 9;

export interface PageState {
  entries: Artwork[];
  lastPage: number;
  hasMore: boolean;
}

const initialState: PageState = {
  entries: [],
  lastPage: 0,
  hasMore: false,
}

export const loadMore = createAsyncThunk(
  'page/fetchArtworks',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as Store;
    const start = state.page.entries.length;
    return await api.fetchArtworks({ start, limit: ENTRIES_PER_PAGE })
  }
);

export const pageSlice = createSlice({
  name: 'lastPage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadMore.fulfilled, (state, action) => {
      state.lastPage += 1;
      const newArtworks = action.payload.items;
      state.entries = [...state.entries, ...newArtworks];
      state.hasMore = action.payload.hasMore;
    });
  },
})

export default pageSlice.reducer
