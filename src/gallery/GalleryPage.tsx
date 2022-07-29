import React, { useState } from 'react';
import '../styles/App.scss';
import ImageView from './ImageView';
import { Artwork, artworks as fullArtData } from '../data';
import ImagePreview from './ImagePreview';
import { useCookies } from 'react-cookie';

/* The 1 key for using cookies */
const COOKIE_LIKED_ENTRIES = 'liked_entries';

const GalleryPage = () => {

  const ENTRIES_PER_PAGE = 9;

  const hasMore = () => {
    return (fullArtData.length > entries.length);
  }

  const loadMore = () => {
    const newArtworks = fullArtData.slice(entries.length, entries.length + ENTRIES_PER_PAGE);
    setEntries([...entries, ...newArtworks]);
    setLastPage(lastPage + 1);
  }

  const onLike = (imageId: string) => {
    if (isLiked(imageId)) {
      setCookie(COOKIE_LIKED_ENTRIES, likedEntries.filter(id => id !== imageId));
    }
    else {
      setCookie(COOKIE_LIKED_ENTRIES, [...likedEntries || [], imageId]);
    }
  }

  const isLiked = (imageId: string) => {
    if (!likedEntries) {
      return false;
    }
    return likedEntries.includes(imageId);
  }

  const [openedImg, setOpenedImg] = useState<Artwork | undefined>(undefined);
  const [lastPage, setLastPage] = useState<number>(1);
  /* entries are arts that are currently loaded on the page */
  const [entries, setEntries] = useState<Artwork[]>(fullArtData.slice(0, ENTRIES_PER_PAGE));
  const [cookies, setCookie] = useCookies([COOKIE_LIKED_ENTRIES]);
  const likedEntries = cookies[COOKIE_LIKED_ENTRIES] as string[] || undefined;

  return (
    <div className='content-padding'>
      <div className='center-wrapper'>
        <div className='grid-container-gallery'>
          {entries.map(artwork =>
            <div key={artwork.id} className='grid-item-padding' >
              <ImagePreview
                artwork={artwork}
                setOpenedImg={setOpenedImg}
                onLike={onLike}
                isLiked={isLiked(artwork.id)}
              />
            </div>
          )}
        </div>
      </div>
      {
        hasMore() &&
        <div className='center-wrapper'>
          <button
            className='button-load'
            onClick={() => loadMore()}
          >
            Load More
          </button>
        </div>
      }
      {
        openedImg &&
        <ImageView
          setOpenedImg={setOpenedImg}
          artwork={openedImg}
          onLike={onLike}
          isLiked={isLiked(openedImg.id)} />
      }
    </div>
  );
}

export default GalleryPage;
