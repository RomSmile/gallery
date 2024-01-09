import { configureStore } from '@reduxjs/toolkit';
import GallerySlice from "./gallery/gallerySlice";


export const store = configureStore({
  reducer: {
    gallery: GallerySlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch