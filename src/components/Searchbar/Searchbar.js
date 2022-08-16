import PropTypes from 'prop-types';
import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import {
  Button,
  ButtonLabel,
  Form,
  Input,
  SearchbarBox,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSearch(e.target.elements.search.value);
    onSubmit(e.target.elements.search.value);
    e.target.reset();
  };
  const handleChange = e => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div>
      <SearchbarBox>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">
            <RiSearchLine></RiSearchLine>
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            type="text"
            onChange={handleChange}
            value={search}
            name="search"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </SearchbarBox>
    </div>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
