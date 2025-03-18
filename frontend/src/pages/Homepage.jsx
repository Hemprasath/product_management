import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product.js";
import ProductCard from "../components/productcart.jsx";
import "../styling/home.css"; // Import the CSS file

const Homepage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Current Products 🚀</h1>

      <div className="product-grid">
        {products &&
          products.map((product) => <ProductCard key={product._id} product={product} />)}
      </div>

      {products && products.length === 0 && (
        <p className="no-products">
          No Products Found 🛒❌{" "}
          <Link to={"/create"} className="create-link">
            Create a Product
          </Link>
        </p>
      )}
    </div>
  );
};

export default Homepage;
