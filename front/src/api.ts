import { Page, Artwork } from "./types";

// for local dev use 'http://localhost:8080'
const API_URL = 'https://artsy-gallery-api.herokuapp.com';

export type FetchArtworksParams = {
  start: number;
  limit: number;
}

export const fetchArtworks = async ({ start, limit }: FetchArtworksParams): Promise<Page<Artwork>> => {
  const response = await fetch(`${API_URL}/gallery?start=${start}&limit=${limit}`);
  const data = await response.json();
  return data;
}
