import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Brand {
  id: number;
  name: string;
}

const BrandsList: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://api.ashyo.fullstackdev.uz/brands/all')
      .then((response) => {
        setBrands(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Ma\'lumotni olishda xatolik yuz berdi.');
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className='text-center'>Yuklanmoqda...</h2>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-[1180px] h-[275px] m-auto mt-15">
      <ul className="grid grid-cols-4 gap-10">
        {brands.map((brand) => (
          <li key={brand.id} className="h-30 border rounded flex justify-center items-center">
            <Link to={`/products?brand=${brand.id}`}>
              <h2 className="text-3xl font-black">{brand.name}</h2>
            </Link>
          </li>
        ))}
        <li>
            <button className='w-full rounded h-30 border text-3xl font-bold'>Ko'proq</button>
        </li>
      </ul>
    </div>
  );
};

export default BrandsList;
