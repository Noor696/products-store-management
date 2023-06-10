import React, { useState } from 'react';
import Modal from 'react-modal';

const AddCategoryModal = ({ isOpen, onClose, onSubmit }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(categoryName);
    setCategoryName('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Add Category</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Category Name"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default AddCategoryModal;