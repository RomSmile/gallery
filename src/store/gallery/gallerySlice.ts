import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import {getGallery, IReturnGetGallery} from "./getGalleryAction";
import { IGallery } from "../../types";

interface IGalleryState {
  currentPage: number | null;
  lastPage: number | null;
  gallery: IGallery[] | null;
  loading: boolean;
  error: string;
}

const initialState: IGalleryState = {
  lastPage: null,
  currentPage: null,
  gallery: null,
  loading: false,
  error: '',
}

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    incrementPage: (state: IGalleryState) => {
      if (state.currentPage) {
        state.currentPage += 1;
      }
    },
    decrementPage: (state: IGalleryState) => {
      if (state.currentPage && state.currentPage !== 1) {
        state.currentPage -= 1;
      }
    },
    setPage: (state: IGalleryState, action: PayloadAction<number>) => {
      if (action.payload > 0 && state.currentPage) {
        state.currentPage = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGallery.fulfilled, (state: IGalleryState, action: PayloadAction<IReturnGetGallery>) => {
      const { response, lastPage } = action.payload;
      if (!state.currentPage) {
        state.currentPage = 1;
      }

      if (response && lastPage) {
        state.gallery = [ ...response ];
        state.lastPage = lastPage
      }
      state.loading = false;
    })
    builder.addCase(getGallery.pending, (state: IGalleryState) => {
      state.loading = true;
    })
    builder.addCase(getGallery.rejected, (state: IGalleryState) => {
      state.loading = false;
      state.error = 'Something went wrong'
    })
  }
})

export const { incrementPage, decrementPage, setPage } = gallerySlice.actions;
export default gallerySlice.reducer