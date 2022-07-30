import { createSlice } from '@reduxjs/toolkit'
import { Artwork, artworks } from '../data';

const ENTRIES_PER_PAGE = 9;

export interface PageState {
  entries: Artwork[];
  lastPage: number;
  hasMore: boolean;
}

const initialState: PageState = {
  entries: artworks.slice(0, ENTRIES_PER_PAGE),
  lastPage: 1,
  hasMore: true,
}

export const pageSlice = createSlice({
  name: 'lastPage',
  initialState,
  reducers: {
    loadMore: (state) => {
      state.lastPage += 1;
      const newArtworks = artworks.slice(state.entries.length, state.entries.length + ENTRIES_PER_PAGE);
      state.entries = [...state.entries, ...newArtworks];
      state.hasMore = (artworks.length > state.entries.length);
    },
  }
})

export const { loadMore } = pageSlice.actions

export default pageSlice.reducer
