import React, { useState } from "react";
import { useProductStore } from "../store/product.js";
import "../styling/createpage.css"; // Import external CSS

const Createpage = () => {
  const [newproduct, setnewproduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddproduct = async () => {
    const { success, message } = await createProduct(newproduct);
    alert(success ? `Success: ${message}` : `Error: ${message}`);
    setnewproduct({ name: "", price: "", image: "" });
  };

  return (
    <div className="container">
      <h1 className="title">Create New Product</h1>

      <div className="form-box">
        <div className="form-group">
          <input
            type="text"
            placeholder="Product Name"
            value={newproduct.name}
            onChange={(e) => setnewproduct({ ...newproduct, name: e.target.value })}
            className="input-field"
          />

          <input
            type="number"
            placeholder="Price"
            value={newproduct.price}
            onChange={(e) => setnewproduct({ ...newproduct, price: e.target.value })}
            className="input-field"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={newproduct.image}
            onChange={(e) => setnewproduct({ ...newproduct, image: e.target.value })}
            className="input-field"
          />

          <button onClick={handleAddproduct} className="submit-button">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Createpage;
