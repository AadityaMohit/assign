import React, { useEffect, useState } from 'react';
 

const ProductList = ({ products }) => {
  return (
    <div className="gr grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="border rounded p-4 shadow">
          {product.image_url && <img src={product.image_url} alt={product.name} className="h-40 w-full object-cover mb-2" />}
          <h2 className="font-bold text-xl">{product.name}</h2>
          <p className="text-green-600 font-semibold">₹{product.price}</p>
          <p className="text-gray-600">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
