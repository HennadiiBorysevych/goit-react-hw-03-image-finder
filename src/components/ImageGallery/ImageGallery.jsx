import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends React.Component {
  render() {
    const { data, modalClick } = this.props;

    return (
      <ul className={clsx('ImageGallery')}>
        {data.map(item => (
          <ImageGalleryItem key={item.id} item={item} modalClick={modalClick} />
        ))}
      </ul>
    );
  }
}
export default ImageGallery;

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
  modalClick: PropTypes.func.isRequired,
};
