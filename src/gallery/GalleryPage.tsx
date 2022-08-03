import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import '../styles/App.scss';
import ImageView from './ImageView';
import { Artwork } from '../types';
import ImagePreview from './ImagePreview';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { loadMore } from '../redux/page';

/* The 1 key for using cookies */
const COOKIE_LIKED_ENTRIES = 'liked_entries';

const GalleryPage = () => {
  const entries = useAppSelector<Artwork[]>(state => state.page.entries);
  const hasMore = useAppSelector<boolean>(state => state.page.hasMore);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadMore());
  }, [dispatch])

  const [openedImg, setOpenedImg] = useState<Artwork | undefined>(undefined);
  const [cookies, setCookie] = useCookies([COOKIE_LIKED_ENTRIES]);
  const likedEntries = cookies[COOKIE_LIKED_ENTRIES] as string[] || undefined;

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

  return (
    <div className='content-padding'>
      <div className='center-wrapper'>
        <div className='grid-container-gallery'>
          {entries.map(artwork =>
            <div key={artwork.id} className='grid-item-padding' >
              <ImagePreview
                artwork={artwork}
                setOpenedImg={setOpenedImg}
                onLike={(onLike)}
                isLiked={isLiked(artwork.id)}
              />
            </div>
          )}
        </div>
      </div>
      {
        hasMore &&
        <div className='center-wrapper'>
          <button
            className='button-load'
            onClick={() => dispatch(loadMore())}
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
