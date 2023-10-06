import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({ onClick }) => (
  <button type="submit" className="col-span-2 font-secondary font-bold bg-primary-200 text-white px-10 py-2 rounded" onClick={onClick}>Add Book</button>
);

const RemoveButton = ({ onClick }) => (
  <button type="button" className="text-primary-100 text-xl px-2 mx-2 border-x" onClick={onClick}>Remove</button>
);

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { AddButton, RemoveButton };
