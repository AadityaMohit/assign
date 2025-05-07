import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './components/Productform';
import ProductList from './components/Productlist';
 

const App = () => {
  const [tab, setTab] = useState('submit');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then(res => setProducts(res.data));
  }, []);

  const addProduct = product => setProducts([product, ...products]);

  return (
    <div>
      <div className="flex justify-center gap-4 my-4">
        <button className={`px-4 py-2 ${tab === 'submit' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setTab('submit')}>Product Submission</button>
        <button className={`px-4 py-2 ${tab === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setTab('list')}>My Products</button>
      </div>
      {tab === 'submit' ? <ProductForm onAdd={addProduct} /> : <ProductList products={products} />}
    </div>
  );
};

export default App;
