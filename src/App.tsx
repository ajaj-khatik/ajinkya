import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/footer";
import Navbar from "./Components/Navbar/navbar";
import HeroSection from "./Components/Hero/Hero";
import ProductDetails from "./Components/Hero/ProductDetails"; // Adjust the path as needed
import Header from "./Components/Navbar/Header";
import OrderForm from "./Components/OrderForm/order"; // Uncommented to add OrderForm component

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Header />
              <HeroSection />
              <Footer />
            </div>
          }
        />

        <Route
          path="/product-details/:productId"
          element={
            <>
              <Navbar />
              <ProductDetails />
              <Footer />
            </>
          }
        />

        <Route
          path="/order-form"
          element={
            <>
              <Navbar />
              <OrderForm />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
