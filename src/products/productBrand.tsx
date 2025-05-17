import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faScaleUnbalancedFlip, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Slider from './slider'
import { Link } from 'react-router-dom';


interface Product {
  id: number;
  name: string;
  price?: number;
  brand_id: string; 
  nasiya:string;
  image:string;
}

const ProductBrand: React.FC = () => {
    const brands = [
  { id: 1, name: 'Artel' },
  { id: 2, name: 'Samsung' },
  { id: 3, name: 'Nokia' },
  { id: 4, name: 'MI' },
  { id: 5, name: 'Apple' },
  { id: 6, name: 'Vivo' },
  { id: 7, name: 'Huawei' }
];


  const { brandId } = useParams<{ brandId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.ashyo.fullstackdev.uz/products')
      .then((res) => {
        const all = res.data.items;
        const filtered = all.filter((p: Product) => p.brand_id === brandId);
        setProducts(filtered);
        setLoading(false);
      });
  }, [brandId]);

  if (loading) return <div className="text-center mt-6">Yuklanmoqda...</div>;

  return (
    <div className=" max-w-[1440px] m-auto mt-5">
      <div className="mb-3">
        <Link to="/">
        <p className="text-[#B6BABF]">
        Bosh sahifaga /
        </p>
        </Link>
      </div>
      <div className="flex">
      <div className="w-auto h-auto mb-10 rounded p-4 bg-[#EBEFF3]">
        <div>
          <p>Narx [so'm]</p>
          <ul className="flex justify-between items-center gap-2">
            <li className="flex flex-col justify-center items-center">
              <p>...dan</p>
              <p className="w-40 h-12 border flex justify-center items-center rounded bg-white">0 so'm</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <p>...gacha</p>
              <p className="w-40 h-12 border flex justify-center items-center rounded bg-white">50 000 so'm</p>
            </li>
          </ul>
        </div>
      <center className="mt-10 mb-10">
      <Slider/>
      </center>
      <div>
          <p className=''>Categoriya</p>
        <ul className='grid grid-cols-2 gap-2'>
          <li className="bg-white rounded-full text-center py-2 hover:bg-blue-100">Noutbook</li>
          <li className="bg-white rounded-full text-center py-2 hover:bg-blue-100">Konditsioner</li>
          <li className="bg-white rounded-full text-center py-2 hover:bg-blue-100">Smarfonlar</li>
          <li className="bg-white rounded-full text-center py-2 hover:bg-blue-100">Kiryuvish mashinasi</li>
          <li className="bg-white rounded-full text-center py-2 hover:bg-blue-100">Televizor</li>
          <li className="bg-white rounded-full text-center py-2 hover:bg-blue-100">Chabg yutgich</li>
        </ul>
      </div>
      <div className="mt-[33px]">
        <h2 className="mb-1 font-bold">Brend</h2>
        <ul className="grid grid-cols-3 gap-2">
          {brands.map((brand) => (
            <li key={brand.id}>
              <Link to={`/brand/${brand.id}`}>
                <div className={`rounded-full text-center cursor-pointer py-2 hover:bg-blue-100 ${
                  brandId === brand.id.toString() ? 'bg-blue-200' : 'bg-white'
                }`}>
                  {brand.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>


      </div>
      <div className="mt-[33px]">
        <h2 className="mb-1 font-bold">
          Tezkor xotira RAM
        </h2>
        <ul className="grid grid-cols-3 gap-2">
          <li className="bg-white rounded-full text-center">2 GB</li>
          <li className="bg-white rounded-full text-center">3 GB</li>
          <li className="bg-white rounded-full text-center">4 GB</li>
          <li className="bg-white rounded-full text-center">6 GB</li>
          <li className="bg-white rounded-full text-center">8 GB</li>
          <li className="bg-white rounded-full text-center">12 GB</li>
          <li className="bg-white rounded-full text-center">16 GB</li>
        </ul>
      </div>
      <div className="mt-[33px]">
        <h2 className="mb-1 font-bold">
          Doimiy xotira
        </h2>
        <ul className="grid grid-cols-3 gap-2">
          <li className="bg-white rounded-full text-center">32 GB</li>
          <li className="bg-white rounded-full text-center">64 GB</li>
          <li className="bg-white rounded-full text-center">128 GB</li>
          <li className="bg-white rounded-full text-center">256 GB</li>
          <li className="bg-white rounded-full text-center">512 GB</li>
        </ul>
      </div>
      <div className="mt-[33px]">
      <h2 className="mb-1 font-bold">
          Akkumulyator hajmi
        </h2>
        <ul  className="grid grid-cols-2 gap-2">
          <li className="bg-white rounded-full text-center">3000 mAh</li>
          <li className="bg-white rounded-full text-center">3200 mAh</li>
          <li className="bg-white rounded-full text-center">3600 mAh</li>
          <li className="bg-white rounded-full text-center">4000 mAh</li>
          <li className="bg-white rounded-full text-center">4500 mAh</li>
          <li className="bg-white rounded-full text-center">5000 mAh</li>
          <li className="bg-white rounded-full text-center">6000 mAh</li>
          <li className="bg-white rounded-full text-center">7000 mAh</li>

        </ul>

      </div>


      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <ul className="w-[1000px] h-[450px] gap-6 grid grid-cols-3">
        {products.map((product) => (
          <li key={product.id} className="rounded p-4 shadow">
            {/* <img className='bg-[#EBEFF3] w-[300px] p-10' src="https://ashyoabdulaziz.vercel.app/_next/image?url=https%3A%2F%2Fapi.ashyo.fullstackdev.uz%2Fuploads%2F%2Fs25ultra.png&w=640&q=75" alt="#" /> */}
            <img src={product.image} alt="" />
            <h3 className="text-xl font-semibold mt-5">{product.name}</h3>
            <p>Narxi: {product.price} so'm</p>
            <div className=''>
                <ul className='flex justify-between items-center'>
                    <li>
                        {product.nasiya && product.price && (
                        <button className="mt-2 px-4 py-2 bg-[#FDE9F4] text-[#F34396]">
                            {product.nasiya} / {Math.round(product.price / parseInt(product.nasiya))} so'm
                        </button>
                        )}
                    </li>
                    <li className='flex items-center gap-[10px]'>
                         <FontAwesomeIcon className="text-[24px] border-gray-400 text-gray-600 border p-[12px] rounded hover:bg-[#134E9B] hover:text-white" icon={faScaleUnbalancedFlip} />
                         <FontAwesomeIcon className="text-[24px] border-gray-400 text-gray-600 border p-[12px] rounded hover:bg-[#134E9B] hover:text-white" icon={faCartShopping} />
                    </li>
                   
                </ul>
            </div>

         
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
    
  );
};

export default ProductBrand;
