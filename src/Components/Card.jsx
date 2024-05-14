import React from "react";

const Card = ({
  thumbnail,
  price,
  brand,
  discountPercentage,
  title,
  stock,
  rating,
}) => {
  //   console.log(thumbnail);

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
          <p>{brand}</p>
        </div>
        <p class="text-gray-700 12pro:text-sm md:text-base font-medium">
          ${price}
        </p>
        <div className="flex gap-x-2 12pro:text-sm md:text-base font-medium">
          <span className="line-through	text-[#ACB4C8]">
            ${Math.ceil(price / (1 - discountPercentage / 100))}
          </span>
          <p class="text-[#ED4D67]">{discountPercentage}%</p>
        </div>
        <div className="12pro:text-sm md:text-base font-medium">
          <p>Stock : {stock}</p>
        </div>
        <div className="12pro:text-sm md:text-base font-medium">
          <p>{rating}/5</p>
        </div>
      </div>
      {/* <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
          </span>
        </div> */}
    </div>
  );
};

export default Card;
