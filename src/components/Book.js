import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ title, author }) => (
  <p>
    {title}
    {' '}
    written by
    {author}
    {' '}
  </p>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
