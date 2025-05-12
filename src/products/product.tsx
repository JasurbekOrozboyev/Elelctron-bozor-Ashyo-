import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  brand_id: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get('https://api.ashyo.fullstackdev.uz/products')
      .then((response) => {
        setProducts(response.data.items);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Yuklanmoqda...</p>;

  return (
    <div className="max-w-[1180px] h-[275px] m-auto mt-15">
      <ul className="grid grid-cols-3 gap-10">
        {products.map((product) => (
          <li key={product.id} className="border rounded p-4">
            <h3 className="text-xl">{product.name}</h3>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-lg font-bold">{product.price} UZS</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
