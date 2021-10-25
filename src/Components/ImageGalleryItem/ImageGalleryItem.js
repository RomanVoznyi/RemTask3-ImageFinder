import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ el, showModal }) => {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={el.webformatURL}
        alt=""
        className={style.ImageGalleryItemImage}
        onClick={() => showModal(el.largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.prototype = {
  el: PropTypes.object.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
