import React from 'react';
import { Link } from 'react-router-dom';

const Brend: React.FC = () => {
  const brands = [
    { id: 1, name: 'Artel' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Nokia' },
    { id: 4, name: 'MI' },
    { id: 5, name: 'Aple' },
    { id: 6, name: 'Vivo' },
    { id: 7, name: 'Huawei' }
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {brands.map((brand) => (
          <Link key={brand.id} to={`/products/brand/${brand.id}`} className="h-18 px-4 py-2 rounded border text-center flex justify-center items-center">
            <p className='text-2xl font-bold'> {brand.name}</p>
          </Link>
        ))}
        <button className='border rounded text-2xl font-bold'>Ko'proq</button>
      </div>
    </div>
  );
};

export default Brend;
