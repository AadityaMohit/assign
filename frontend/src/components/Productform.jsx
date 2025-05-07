import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onAdd }) => {
  const [form, setForm] = useState({ name: '', price: '', description: '', image_url: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/products', form);
    onAdd(res.data);
    setForm({ name: '', price: '', description: '', image_url: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-lg mx-auto">
      <input name="name" onChange={handleChange} value={form.name} placeholder="Product Name" className="border p-2 w-full" required />
      <input name="price" onChange={handleChange} value={form.price} placeholder="Price" className="border p-2 w-full" required />
      <textarea name="description" onChange={handleChange} value={form.description} placeholder="Description" className="border p-2 w-full" />
      <input name="image_url" onChange={handleChange} value={form.image_url} placeholder="Image URL (optional)" className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default ProductForm;
