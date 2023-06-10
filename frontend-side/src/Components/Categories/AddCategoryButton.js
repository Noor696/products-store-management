import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const AddCategoryButton = ({ onClick }) => (
  <Button variant="success" onClick={onClick}>Add Category</Button>
  // <button onClick={onClick}>Add Category</button>
);

export default AddCategoryButton;