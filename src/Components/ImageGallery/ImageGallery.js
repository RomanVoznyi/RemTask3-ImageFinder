import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import style from './ImageGallery.module.css';

const ImageGallery = ({ imageList, showModal }) => {
  return (
    <ul className={style.ImageGallery}>
      {imageList.map(el => (
        <ImageGalleryItem el={el} showModal={showModal} key={el.id} />
      ))}
    </ul>
  );
};

ImageGallery.prototype = {
  showModal: PropTypes.array.isRequired,
  imageList: PropTypes.func.isRequired,
};

export default ImageGallery;
