import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Card, Button, Image,Row,Col } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import ProductsStyle from '../Products/ProductsStyle.css';

const Home = () => {

    const [products, setProducts] = useState([]);

  const [categorie, setCategories] = useState([]); // Add categories states

    useEffect(() => {
        fetchProducts();
        fetchCategories()
      }, []);

    const fetchProducts = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/product/');
          setProducts(response.data);
          console.log(response);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      const fetchCategories = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/product/categories');
          setCategories(response.data);
          console.log(response);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };



    
    return (
        <div id='bage'>
            
                
                        <h1>Welcome to the Home Pages</h1>

      <Row xs={1} sm={2} md={3} lg={4} >

{products.map((product) => (
  <Col>
  <div id="wrapper">
  <Card style={{ width: "18rem" }} id="card" key={product.id}>
  <Card.Img variant="top" src={product.image} id="cardImg"  />
  <Card.Body id="info" style={{ margin: "-10px 0px" }}>
  <Card.Title id="cardTitle">{product.name} </Card.Title>
  <span class="flex items-center">
                    <div className="p-1 justify-between flex">
                      <Rating
                        className="mr-auto ml-1"
                        name="read-only"
                        value={product.rate}
                        readOnly
                      />
                    </div>
                    <span class="text-gray-600 ml-3">{product.rate}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 inline mr-1 ml-1 text-amber-400"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27Z"
                      />
                    </svg>
                    <span class="text-gray-600">rate</span>
                  </span>
  <Card.Text id="cardText"> {product.price} $</Card.Text>
  <Card.Text id="cardText">{product.description}</Card.Text>
  <Card.Text id="cardText">Category: {product.category}</Card.Text>
  <Card.Text id="cardText">Quantity : {product.quantity} - Orders : {product.orderCount}</Card.Text>

  
  </Card.Body>

  </Card>
        </div>
        </Col>
      ))}</Row>
              
           

        </div>
    )
}



export default Home;