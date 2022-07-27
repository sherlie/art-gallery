import React from 'react';
import '../App.css';
import { Artwork } from '../data';
import HeartIcon from '../icons/HeartIcon';

type ImageViewProps = {
  artwork: Artwork;
  setOpenedImg: (artwork: Artwork | undefined) => void;
  onLike: (artworkId: string) => void;
  isLiked: boolean;
}

const ImagePreview = ({ artwork, setOpenedImg, onLike, isLiked }: ImageViewProps) => {

  return (
    <div className="image-wrapper">
      <button className="image-button" onClick={() => setOpenedImg(artwork)}
      >
        <img
          src={artwork.src}
          alt={artwork.description} />
      </button>
      <button
        className={`on-button heart-button ${isLiked ? "fill-icon" : ""}`}
        onClick={() => onLike(artwork.id)}
      >
        <HeartIcon size={24} />
      </button>
    </div >
  );
}

export default ImagePreview;
