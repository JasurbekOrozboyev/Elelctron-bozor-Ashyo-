import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faShop } from '@fortawesome/free-solid-svg-icons';

interface ProductDetailsType {
  id: number;
  name: string;
  price?: number;
  nasiya: string;
  image?: string;
  description?: string;  
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDetailsType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`https://api.ashyo.fullstackdev.uz/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Yuklanmoqda...</div>;
  if (!product) return <div>Mahsulot topilmadi</div>;

  return (
    <div className="max-w-[1440px] mx-auto p-4">
        <h2 className='text-3xl font-bold'>{product.name}</h2>
    <div className='flex justify-between gap-5'>
        <ul className='w-[50%] flex gap-10 items-center mt-3'>
            <li className='flex flex-col gap-12'>
                 {/* <img className="bg-[#EBEFF3] w-40 p-10 rounded" src="https://ashyoabdulaziz.vercel.app/_next/image?url=https%3A%2F%2Fapi.ashyo.fullstackdev.uz%2Fuploads%2F%2Fipad12.png&w=640&q=75" alt="#" />
                  <img className="bg-[#EBEFF3] w-40 p-10 rounded" src="https://ashyoabdulaziz.vercel.app/_next/image?url=https%3A%2F%2Fapi.ashyo.fullstackdev.uz%2Fuploads%2F%2Fipad12.png&w=640&q=75" alt="#" />
                   <img className="bg-[#EBEFF3] w-40 p-10 rounded" src="https://ashyoabdulaziz.vercel.app/_next/image?url=https%3A%2F%2Fapi.ashyo.fullstackdev.uz%2Fuploads%2F%2Fipad12.png&w=640&q=75" alt="#" /> */}
                   <img className="w-80 p-2 rounded" src={product.image} alt={product.name} />
                   <img className="w-80 p-2 rounded" src={product.image} alt={product.name} />
                   <img className="w-80 p-2 rounded" src={product.image} alt={product.name} />
            </li>
            <li> 
                {/* <img className="bg-[#EBEFF3] p-10" src="https://ashyoabdulaziz.vercel.app/_next/image?url=https%3A%2F%2Fapi.ashyo.fullstackdev.uz%2Fuploads%2F%2Fipad12.png&w=640&q=75" alt="#" /> */}
                <img className='w-300' src={product.image} alt={product.name} />
                </li>
        </ul>
        
      <div className='w-[50%] '>
      {product.price && <p className="text-2xl font-bold mb-2">Narxi: {product.price} so'm</p>}
      {product.nasiya && (
        <h3 className="mb-4">
          <span className='text-2xl font-bold'>Nasiya:</span> <span className='text-2xl'>{product.nasiya} / {Math.round(product.price! / parseInt(product.nasiya))} so'm</span>
        </h3>
      )}
      <p className='text-2xl font-serif'>Malumot:</p>
      <p className='font-serif text-xl'>{product.description}</p>
      <button className='w-full h-15 rounded bg-[#EBEFF3] mt-5'>
        <span className='text-2xl'>{product.nasiya} / {Math.round(product.price! / parseInt(product.nasiya))} so'm</span>
      </button>
      <div className='flex justify-between items-center gap-10 mt-5'>
        <button className='w-full h-15 rounded border-3 border-[#134E9B] text-[#134E9B] hover:bg-[#134E9B] hover:text-white text-2xl'>Add to Cart</button>
        <button className='w-full h-15 rounded border-3 border-[#134E9B] text-[#134E9B] hover:bg-[#134E9B] hover:text-white text-2xl'>Buy Now</button>
      </div>
      <ul className='flex flex-col gap-5 mt-13'>
        <li className=' text-xl flex items-center gap-3'>
            <FontAwesomeIcon icon={faTruck} /> <span>Delivery across Uzbekistan</span>
        </li>
        <li className=' text-xl flex items-center gap-3'>
            <FontAwesomeIcon icon={faShop} /> <span>Can be picked up from the store</span>
        </li>
        <li className=' text-xl flex items-center gap-3'>
            <FontAwesomeIcon icon={faShop} /> <span>Estimated delivery time: 1 to 3 days...</span>

        </li>
      </ul>
      </div>
    </div>
    <div></div>
    </div>
  );
};

export default ProductDetails;
