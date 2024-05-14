import React from "react";

const Badge = ({ category }) => {
  const getColorCategory = (category) => {
    switch (category.toLowerCase()) {
      case "smartphones":
        return "bg-blue-500";
      case "laptops":
        return "bg-green-500";
      case "fragrances":
        return "bg-yellow-500";
      case "skincare":
        return "bg-pink-500";
      case "groceries":
        return "bg-red-500";
      case "home-decoration":
        return "bg-purple-500";
      case "furniture":
        return "bg-indigo-700";
      case "tops":
        return "bg-orange-500";
      case "womens-dresses":
        return "bg-teal-500";
      case "womens-shoes":
        return "bg-cyan-500";
      case "mens-shirts":
        return "bg-rose-500";
      case "mens-shoes":
        return "bg-amber-500";
      case "mens-watches":
        return "bg-lime-500";
      case "womens-watches":
        return "bg-emerald-500";
      case "womens-bags":
        return "bg-violet-500";
      case "womens-jewellery":
        return "bg-gray-800";
      case "sunglasses":
        return "bg-gray-300";
      case "automotive":
        return "bg-gray-400";
      case "motorcycle":
        return "bg-gray-500";
      case "lighting":
        return "bg-gray-600";
      default:
        return "bg-gray-500"; // Default warna jika kategori tidak cocok
    }
  };
  return (
    <div className="12pro:text-xs md:text-xl">
      <span
        className={`badge text-white px-2 py-1 rounded-md ${getColorCategory(
          category
        )}`}
      >
        {category}
      </span>
    </div>
  );
};

export default Badge;
