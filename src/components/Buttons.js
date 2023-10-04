import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({ onClick }) => (
  <button type="submit" onClick={onClick}>Add Book</button>
);

const RemoveButton = ({ onClick }) => (
  <button type="button" onClick={onClick}>Remove</button>
);

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { AddButton, RemoveButton };
