import React, { useState } from 'react';
import '../App.css';
import ImageView from './ImageView';
import { Artwork, artworks as fullArtData } from '../data';
import ImagePreview from './ImagePreview';

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

  const [openedImg, setOpenedImg] = useState<Artwork | undefined>(undefined);
  const [lastPage, setLastPage] = useState<number>(1);
  /* entries are arts that are currently loaded on the page */
  const [entries, setEntries] = useState<Artwork[]>(fullArtData.slice(0, ENTRIES_PER_PAGE));

  return (
    <div className='content-padding'>
      <div className='center-wrapper'>
        <div className='grid-container'>
          {entries.map(artwork =>
            <div key={artwork.id} className='grid-item-padding'>
              <ImagePreview artwork={artwork} setOpenedImg={setOpenedImg} />
            </div>
          )}
        </div>
      </div>
      {
        hasMore() &&
        <div className='center-wrapper'>
          <button
            className='button button-load'
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
          artwork={openedImg} />
      }
    </div>
  );
}

export default GalleryPage;
