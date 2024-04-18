import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useProductStore from '../store/ProductsStore.jsx';
import {useFetchProducts} from '../hooks/ProductsFetchHook'

const ProductsForm = () => {
  const addProduct = useProductStore((state) => state.addProduct);
  const [ProductTitle, setProductTitle] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { isLoading, data: ProductsFromApi, error } = useFetchProducts();

  const handleProductSelect = (Product) => {
    setSelectedProduct(Product);
    setProductTitle(Product.title);
  };

  const handleProductSubmit = () => {
    if (!selectedProduct) return alert('Please select a Product');
    addProduct(selectedProduct);
    setProductTitle('');
    setSelectedProduct(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="form-container">
      <select
        value={selectedProduct ? selectedProduct.title : ''}
        onChange={(e) => {
          const selected = ProductsFromApi.find((Product) => Product.title === e.target.value);
          handleProductSelect(selected);
        }}
        className="form-input"
      >
        <option value="">Select a Product</option>
        {ProductsFromApi.map((Product, index) => (
          <option key={index} value={Product.title}>
            {Product.title}
          </option>
        ))}
      </select>
      <button onClick={() => handleProductSubmit()} className="form-submit-btn">
        Add Product
      </button>
    </div>
  );
};

export default ProductsForm;