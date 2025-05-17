import React from 'react';
import { Link } from 'react-router-dom';

const Brend: React.FC = () => {
  const brands = [
    { id: 1, name: 'Artel', image: '/artel.png' },
    { id: 2, name: 'Samsung', image: '/samsung_brand.png' },
    { id: 3, name: 'Nokia', image: '/nokia.png' },
    { id: 4, name: 'MI', image: '/mi.png' },
    { id: 5, name: 'Apple', image: '/apple.png' },
    { id: 6, name: 'Vivo', image: '/vivo.png' },
    { id: 7, name: 'Huawei', image: '/huwavei.png' }
  ];

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {brands.map((brand) => (
          <Link key={brand.id} to={`/products/brand/${brand.id}`} className=" text-center flex justify-center items-center">
            <img src={brand.image} alt={brand.name} />
          </Link>
        ))}
        <button className='border rounded text-2xl font-bold'>Ko'proq</button>
      </div>
    </div>
  );
};

export default Brend;
