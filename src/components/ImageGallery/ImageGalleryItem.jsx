import clsx from 'clsx';

const ImageGalleryItem = ({ item }) => {
  return (
    <li className={clsx('ImageGalleryItem')}>
      <img
        src={item.webformatURL}
        alt={item.tags}
        className={clsx('ImageGalleryItem-image')}
      />
    </li>
  );
};

export default ImageGalleryItem;
