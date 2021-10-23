import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ el }) => {
  return (
    <li className={style.ImageGalleryItem} key={el.id}>
      <img
        src={el.webformatURL}
        data-big-image={el.largeImageURL}
        alt=""
        className={style.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;
