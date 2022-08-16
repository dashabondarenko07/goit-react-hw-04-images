import { useEffect } from 'react';
import { useState } from 'react';
import * as API from '../services/api';
import { Box } from './App.styled';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState();
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getCountries() {
      try {
        const countries = await API.getImages(query, page);
        setImages(images => [...images, ...countries]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCountries();
  }, [query, page]);

  const handleSubmit = search => {
    setQuery(search);
    setPage(1);
    setImages([]);
  };
  const getLargeImageURL = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };
  const handleClick = () => {
    setPage(state => state + 1);
  };
  const toggleShowModal = () => {
    setLargeImageURL(null);
  };

  return (
    <Box>
      <Searchbar onSubmit={handleSubmit} />
      {error && (
        <p>Ouch! Something went wrong: Reload the page and try again once.</p>
      )}
      {images.length > 0 && (
        <ImageGallery images={images} onClick={getLargeImageURL} />
      )}
      {images.length !== 0 && <Button onClick={handleClick}>Load more</Button>}
      {largeImageURL && (
        <Modal onClick={toggleShowModal}>
          <img src={largeImageURL} alt={query} />
        </Modal>
      )}
      {isLoading && <Loader />}
    </Box>
  );
};
