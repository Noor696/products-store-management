import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCategoryButton from './AddCategoryButton';
import AddCategoryModal from './AddCategoryModal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CategoryStyle from '../Categories/CategoryStyle.css';


const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetchCategories();
      }, []);
    //   const url = 'http://127.0.0.1:8000/api/product/';
      const fetchCategories = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/product/categories');
          setCategories(response.data);
          console.log(response);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };

      const handleAddCategory = (categoryName) => {
        // Make a POST request to create a new category
        if (selectedCategory) {
            handleEditCategory(selectedCategory.id, categoryName);
          } else {
        axios
          .post('http://127.0.0.1:8000/api/product/categories', { name: categoryName })
          .then((response) => {
            console.log('Category created:', response.data);
            // Optionally, you can update the category list after successful creation
            fetchCategories();
          })
          .catch((error) => {
            console.error('Error creating category:', error);
          });
        }
        setIsModalOpen(false);
        setSelectedCategory(null);
      };

      const handleEditCategory = (categoryId, newName) => {
        axios
          .put(`http://127.0.0.1:8000/api/product/categories/${categoryId}`, { name: newName })
          .then((response) => {
            console.log('Category updated:', response.data);
            fetchCategories();
          })
          .catch((error) => {
            console.error('Error updating category:', error);
          });
      };

      const handleDeleteCategory = (categoryId) => {
        axios
          .delete(`http://127.0.0.1:8000/api/product/categories/${categoryId}`)
          .then((response) => {
            console.log('Category deleted:', response.data);
            fetchCategories();
          })
          .catch((error) => {
            console.error('Error deleting category:', error);
          });
      };

      const openEditModal = (category) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
      };

    return (
        <div>
            <div className='page'>
      <h2>Categories</h2>
      <AddCategoryButton onClick={() => setIsModalOpen(true)} />

      <AddCategoryModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCategory(null);
        }}
        onSubmit={handleAddCategory}
        selectedCategoryId={selectedCategory}
      />
      <Table id='table' bordered hover>
        <thead >
          <tr id='tr'>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr id='trv' key={category.id}>
              <td>{category.name}</td>
              <td id='btn'>
              <button className="btn btn-primary" id="editbut" onClick={() => openEditModal(category)}>
              🖊 Edit
                </button>
                <button className="btn btn-danger" id="deletebut" onClick={() => handleDeleteCategory(category.id)}>
                🗑 Delete
                </button>
                </td>
            </tr>
          ))}
        </tbody>
        </Table>
    </div>
        </div>
    )
}

export default Categories; 