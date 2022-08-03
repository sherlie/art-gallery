import { Page, Artwork } from "./types";

export type FetchArtworksParams = {
  start: number;
  limit: number;
}

export const fetchArtworks = async ({ start, limit }: FetchArtworksParams): Promise<Page<Artwork>> => {
  const response = await fetch(`http://localhost:8080/gallery?start=${start}&limit=${limit}`);
  const data = await response.json();
  return data;
}
