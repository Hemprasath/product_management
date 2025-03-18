import React, { useState } from "react";
import { useProductStore } from "../store/product.js";
import { FaEdit, FaTrash } from "react-icons/fa"; // Replaced Chakra Icons
import "../styling/productcart.css"; // Import CSS file

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProducts, updateProduct } = useProductStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProducts(pid);
    alert(success ? "Product deleted successfully" : message);
  };

  const handleUpdateProduct = async () => {
    const { success, message } = await updateProduct(product._id, updatedProduct);
    if (success) {
      alert("Product updated successfully");
      setIsOpen(false);
    } else {
      alert(message);
    }
  };

  return (
    <div>
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">RS. {product.price}</p>
        <div className="product-actions">
          <button className="product-btn edit" onClick={() => setIsOpen(true)}>
            <FaEdit />
          </button>
          <button className="product-btn delete" onClick={() => handleDeleteProduct(product._id)}>
            <FaTrash />
          </button>
        </div>
      </div>
      </div>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Update Product</h2>
            <input
              type="text"
              placeholder="Product Name"
              value={updatedProduct.name}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Price"
              value={updatedProduct.price}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              value={updatedProduct.image}
              onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
            />
            <div className="modal-actions">
              <button onClick={handleUpdateProduct} className="update-btn">
                Update
              </button>
              <button onClick={() => setIsOpen(false)} className="close-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
   
  );
};

export default ProductCard;
