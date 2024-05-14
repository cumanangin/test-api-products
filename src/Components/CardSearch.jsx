import React from "react";

const CardSearch = ({ title, thumbnail }) => {
  return (
    <div class="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="flex justify-center">
        <img
          class=""
          src={thumbnail}
          alt="image not found"
          className="hover:scale-110 transition duration-300"
        />
      </div>
      <div class="px-6 py-4">
        <div class="font-bold 12pro:text-lg md:text-xl mb-2">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSearch;
