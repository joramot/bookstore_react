import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ category, title, author }) => (
  <>
    <p className="text-secondary-200 font-bold font-primary mb-1">
      {category}
    </p>
    <p className="font-bold text-lg font-primary">
      {title}
    </p>
    <p className="text-primary-100">
      {author}
    </p>
  </>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
