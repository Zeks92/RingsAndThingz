import React from "react";
import { CardProps } from "../models/models";

const Card: React.FC<CardProps> = ({ product }) => {
  const { name, brand_name } = product.basic_data;
  const { original, discount } = product.price.price;
  const currency = product.price.currency;
  const imageUrl = product.image[0] || "";

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <img src={imageUrl} alt={name} className="h-48 w-full object-cover rounded-md" />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        {brand_name && <p className="text-gray-500">{brand_name}</p>}
      </div>
      <div className="mt-4">
        {discount ? (
          <div className="flex items-center space-x-2">
            <p className="text-red-500 font-bold">
              {discount} {currency}
            </p>
            <p className="text-gray-500 line-through">
              {original} {currency}
            </p>
          </div>
        ) : (
          <p className="text-gray-800 font-bold">
            {original} {currency}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
