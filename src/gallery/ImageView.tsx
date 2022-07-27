import React from 'react';
import '../App.css';
import { Artwork } from '../data';
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
      <dialog open className="image-dialog" onClick={(event) => event.stopPropagation()}>
        <img src={artwork.src} alt={artwork.description} />
        <button className='on-button close-button' onClick={() => setOpenedImg(undefined)}>
          <CloseIcon size={36} />
        </button>
        <button
          onClick={() => onLike(artwork.id)}
          className={`on-button heart-button ${isLiked ? "fill-icon" : ""}`}>
          <HeartIcon size={36} />
        </button>
      </dialog >
    </div >
  );
}

export default ImageView;
