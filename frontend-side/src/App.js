
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/mainCompanents/Navbar';
import Home from './Components/mainCompanents/Home';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import { Row,Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Row>
        <Navbar />
      </Row>
      <Col lg={10}>
      <Row className='pt-20'>
      <Router>
      <Routes>
      <Route path="/" element={<Home />}>
                            </Route>
                            <Route path="/products" element={<Products />}>
                            </Route>
                            <Route path="/categories" element={<Categories />}>
                            </Route>

      </Routes>

      </Router>
      </Row>
      </Col>
      
    </div>
  );
}

export default App;
