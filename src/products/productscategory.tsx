import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  description: string;
  category_id: string;
}

const ProductsByCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://api.ashyo.fullstackdev.uz/products")
      .then((res) => {
        const filteredProducts = res.data.filter(
          (product: Product) => product.category_id === categoryId
        );
        setProducts(filteredProducts);
      })
      .catch((err) => {
        console.error("Mahsulotlar yuklanmadi:", err);
      })
      .finally(() => setLoading(false));
  }, [categoryId]); 

  if (loading) {
    return <div>Yuklanmoqda...</div>;
  }

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded shadow p-4">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsByCategory;
