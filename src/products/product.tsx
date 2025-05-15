import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  description: string;
  category_name: string; 
}

const ProductsByCategory = () => {
  const { categoryName } = useParams<{ categoryName: string }>(); 
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.ashyo.fullstackdev.uz/products")
      .then((res) => {
        const filtered = res.data.filter(
          (product: Product) =>
            product.category_name?.toLowerCase() === categoryName?.toLowerCase()
        );
        setProducts(filtered);
      })
      .catch((err) => {
        console.error("Yuklanmadi:", err);
      })
      .finally(() => setLoading(false));
  }, [categoryName]);

  if (loading) return <h2 className="text-center">Yuklanmoqda...</h2>;

  if (products.length === 0) return <div>Mahsulot topilmadi.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded p-4 shadow">
          <h3 className="font-bold">{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsByCategory;
