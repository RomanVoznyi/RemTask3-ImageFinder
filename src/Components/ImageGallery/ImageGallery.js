import ImageGalleryItem from '../ImageGalleryItem';
import style from './ImageGallery.module.css';

const ImageGallery = ({ imageList }) => {
  return (
    <ul className={style.ImageGallery}>
      {imageList.length > 0 &&
        imageList.map(el => <ImageGalleryItem el={el} />)}
    </ul>
  );
};

export default ImageGallery;
