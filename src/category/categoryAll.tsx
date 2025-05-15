import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";

interface Category {
  id: number;
  name: string;
  image: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://api.ashyo.fullstackdev.uz/categories/all")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Kategoriya yuklashda xatolik:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-40 w-full rounded" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-4">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="border rounded shadow flex justify-center items-center md:mt-3 md:h-10 active:bg-gray-400 transition-all duration-200">
          <Link
            to={`/productscategory/${cat.name}`} 
            className="md:text-[16px] font-semibold">
            {cat.name}
          </Link>

        </div>
      ))}
    </div>
  );
};

export default Categories;
