import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ src, largeImageURL, onClick }) {
  return (
    <Item>
      <Image src={src} alt="" onClick={() => onClick(largeImageURL)} />
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
