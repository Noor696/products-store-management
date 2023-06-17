import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./Components/mainCompanents/Navbar";
import Home from "./Components/mainCompanents/Home";
import LoginPage from "./Components/mainCompanents/LoginPage";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import { Row, Col } from "react-bootstrap";

function App() {
  const authenticated = false;
  return (
    <div>
      <Row></Row>
      <Col>
        <Row>
          <Router>
            <AuthProvider>
              <Navbar />
              <Routes>
                <Route path="/login" element={<LoginPage />}></Route>

                <Route path="/" element={<Home />} exact />
                {/* </Route> */}

                <Route path="/products" element={<Products />}></Route>
                <Route path="/categories" element={<Categories />}></Route>
              </Routes>
            </AuthProvider>
          </Router>
        </Row>
      </Col>
    </div>
  );
}

export default App;
