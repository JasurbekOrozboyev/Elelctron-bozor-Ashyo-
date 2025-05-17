import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Slider from './slider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faScaleUnbalancedFlip, faCartShopping} from '@fortawesome/free-solid-svg-icons';


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  nasiya:string;
  image: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
}

const ProductsByCategory = () => {
  const brands = [
  { id: 1, name: 'Artel' },
  { id: 2, name: 'Samsung' },
  { id: 3, name: 'Nokia' },
  { id: 4, name: 'MI' },
  { id: 5, name: 'Apple' },
  { id: 6, name: 'Vivo' },
  { id: 7, name: 'Huawei' }
];
  const { categoryName } = useParams<{ categoryName: string }>(); 
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.ashyo.fullstackdev.uz/products")
      .then((res) => {
        const items = res.data.items || [];
        const filtered = items.filter(
          (product: Product) =>
            product.category?.name?.toLowerCase() === categoryName?.toLowerCase()
        );
        setProducts(filtered);
      })
      .catch((err) => {
        console.error("Mahsulotlar yuklanmadi:", err);
      })
      .finally(() => setLoading(false));
  }, [categoryName]);

  if (loading) return <div className="p-4">Yuklanmoqda...</div>;

  

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
                      <div className="bg-white rounded-full text-center cursor-pointer py-2 hover:bg-blue-100">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border border-gray-300  h-130 rounded p-4 shadow">
          {/* <img className="bg-[#EBEFF3] p-10" src="https://ashyoabdulaziz.vercel.app/_next/image?url=https%3A%2F%2Fapi.ashyo.fullstackdev.uz%2Fuploads%2F%2Fipad12.png&w=640&q=75" alt="#" /> */}
          <img src={product.image} alt={product.name} />
          <h3 className="font-bold text-lg mt-3">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <ul className='flex justify-between items-center mt-3'>
                <li>
          <p className="mt-2 font-semibold text-xl text-green-600">{product.price} so'm</p>
          <p className="mt-2 px-4 py-2 bg-[#FDE9F4] text-[#F34396]"> {product.nasiya} / {Math.round(product.price / parseInt(product.nasiya))} so'm</p>
                </li>
                <li className='flex items-center gap-[10px]'>
                      <FontAwesomeIcon className="text-[24px] border-gray-400 text-gray-600 border p-[12px] rounded hover:bg-[#134E9B] hover:text-white" icon={faScaleUnbalancedFlip} />
                      <FontAwesomeIcon className="text-[24px] border-gray-400 text-gray-600 border p-[12px] rounded hover:bg-[#134E9B] hover:text-white" icon={faCartShopping} />
                </li>
                
            </ul>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
};

export default ProductsByCategory;
