import React from 'react';
//import '../styles/App.scss';
import { Artwork } from '../types';
import CloseIcon from '../icons/CloseIcon';
import HeartIcon from '../icons/HeartIcon';

type ImageViewProps = {
  artwork: Artwork;
  setOpenedImg: (artwork: Artwork | undefined) => void;
  onLike: (artworkId: string) => void;
  isLiked: boolean;
}

const ImageView = ({ artwork, setOpenedImg, isLiked, onLike }: ImageViewProps) => {

  return (
    <div className='dialog-wrapper' onClick={() => setOpenedImg(undefined)}>
      <dialog open onClick={(event) => event.stopPropagation()}>
        <img src={artwork.src} alt={artwork.description} />
        <button className='top-right-button' onClick={() => setOpenedImg(undefined)}>
          <CloseIcon size={36} />
        </button>
        <button
          onClick={() => onLike(artwork.id)}
          className={`bottom-right-button ${isLiked ? "fill-icon" : ""}`}>
          <HeartIcon size={36} />
        </button>
      </dialog >
    </div >
  );
}

export default ImageView;
