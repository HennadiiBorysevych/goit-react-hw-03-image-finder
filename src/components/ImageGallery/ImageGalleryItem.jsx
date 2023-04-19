import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends React.Component {
  render() {
    const { item, modalClick } = this.props;
    return (
      <li
        className={clsx('ImageGalleryItem')}
        onClick={() => modalClick(item.largeImageURL)}
      >
        <img
          src={item.webformatURL}
          alt={item.tags}
          className={clsx('ImageGalleryItem-image')}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes={
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  modalClick: PropTypes.func.isRequired,
}
