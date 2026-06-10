import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Category = {
  id: number;
  name: string;
};

export default function CategoryIndex() {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    try {
      const response = await fetch("https://backendcrud-omega.vercel.app/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Yakin ingin menghapus category ini?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`https://backendcrud-omega.vercel.app/categories/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Gagal menghapus category");
      }

      alert("Category berhasil dihapus");
      getCategories();
    } catch (error) {
      console.error(error);
      alert("Category gagal dihapus");
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-red-900">
        Category
      </h1>

      <Link
        to="/dashboard/category/create"
        className="inline-block px-5 py-3 rounded-2xl font-medium bg-red-900 text-white hover:bg-pink-200 hover:text-black transition shadow-sm mb-6"
      >
        Create New
      </Link>

      <div className="flex flex-wrap gap-4">
        {categories.map((item) => (
          <div
            key={item.id}
            className="px-6 py-4 bg-pink-200 border border-black rounded-2xl shadow-sm text-red-900 font-medium hover:shadow-md transition"
          >
            <p>{item.name}</p>

            <div className="flex gap-2 mt-4">
              <Link
                to={`/dashboard/category/update/${item.id}`}
                className="px-4 py-2 rounded-xl bg-red-900 text-white text-sm hover:bg-pink-200 hover:text-black"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(item.id)}
                className="px-4 py-2 rounded-xl bg-red-900 text-white text-sm hover:bg-pink-200 hover:text-black"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}