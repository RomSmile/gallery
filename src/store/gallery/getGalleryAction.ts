import { createAsyncThunk } from "@reduxjs/toolkit";
import {IGallery} from "../../types";

export type IReturnGetGallery = {
  response: IGallery[] | null;
  lastPage: number | null;
  error: string;
}
export const getGallery = createAsyncThunk(
  'getGallery',
  async (page: number): Promise<IReturnGetGallery> => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_API_URL}/photos/?client_id=${process.env.REACT_APP_CLIENT_ID}&page=${page}`
    );

    const json = await response.json();

    const linkHeader = response.headers.get('Link');

    const regex = /page=(\d+).*?rel="last"/;

    const match = (linkHeader as string).match(regex);

    if (match && match[1]) {
      return {
        response: json,
        lastPage: +match[1],
        error: '',
      };
    } else {
      return {
        response: null,
        lastPage: null,
        error: 'something went wrong',
      }
    }
  });