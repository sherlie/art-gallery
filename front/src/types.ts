export type Artwork = {
  id: string;
  description: string;
  src: string;
}

export type Page<T> = {
  items: T[],
  hasMore: boolean,
}
