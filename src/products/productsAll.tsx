import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faScaleUnbalancedFlip, faCartShopping, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price?: number;
  nasiya:string;
  image?: string;
}

const SimpleCarousel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('https://api.ashyo.fullstackdev.uz/products')
      .then(res => res.json())
      .then(data => setProducts(data.items))
      .catch(console.error);
  }, []);

  const itemsToShow = 5; 
  const next = () => {
    setCurrentIndex((prev) => {
      if (prev + 1 > products.length - itemsToShow) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prev = () => {
    setCurrentIndex((prev) => {
      if (prev - 1 < 0) {
        return products.length - itemsToShow; 
      }
      return prev - 1;
    });
  };

  if (products.length === 0) return <div>Yuklanmoqda...</div>;

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <div className="max-w-[1440px] mx-auto p-4 relative bg-white shadow rounded">
        <h2 className='text-3xl font-bold mb-2'>Most Popular Products</h2>
      <div className="flex gap-4 overflow-hidden">
  
{visibleProducts.map(product => (
  <Link to={`/product/${product.id}`} key={product.id} className="flex-shrink-0 w-1/5 p-2 border rounded block">
   <img className="bg-[#EBEFF3] p-10" src="https://ashyoabdulaziz.vercel.app/_next/image?url=https%3A%2F%2Fapi.ashyo.fullstackdev.uz%2Fuploads%2F%2Fipad12.png&w=640&q=75" alt="#" />
    <h2 className="text-sm font-semibold">{product.name}</h2>
    {product.price && <p className="text-gray-700">{product.price} so'm</p>}
    <ul className='flex justify-between items-center'>
      <li>
        {product.nasiya && product.price && (
          <button className="mt-2 py-2 px-1 rounded bg-[#FDE9F4] text-[#F34396]">
            {product.nasiya} / {Math.round(product.price / parseInt(product.nasiya))} so'm
          </button>
        )}
      </li>
      <li className='flex items-center gap-[10px]'>
        <FontAwesomeIcon className="text-[24px] border-gray-400 text-gray-600 border p-[12px] rounded hover:bg-[#134E9B] hover:text-white" icon={faScaleUnbalancedFlip} />
        <FontAwesomeIcon className="text-[24px] border-gray-400 text-gray-600 border p-[12px] rounded hover:bg-[#134E9B] hover:text-white" icon={faCartShopping} />
      </li>
    </ul>
  </Link>
))}

      </div>

      <button onClick={prev} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded hover:bg-gray-400 transition">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button onClick={next} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 p-2 rounded hover:bg-gray-400 transition">
      <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default SimpleCarousel;
