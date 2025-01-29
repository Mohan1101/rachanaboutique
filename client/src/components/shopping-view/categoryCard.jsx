import React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils"; // Utility function for conditional classNames
import { Card } from "@/components/ui/card";



const CategoryCard = ({ categoryItem }) => {
  const navigate = useNavigate();

const handleClick = () => {
  navigate(`/shop/collections?category=${categoryItem.label}`);
};

    return (
      <Card className="w-full max-w-md rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300 overflow-hidden" onClick={handleClick}>
        <div className="relative group">
          <img
            src={categoryItem.image}
            alt={categoryItem.label}
            className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-110 z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center hover:bg-opacity-0 transition duration-300 hover:cursor-pointer z-10">
            <span className="text-xl font-bold text-white">{categoryItem.label}</span>
          </div>
        </div>
        <div className="relative z-20 p-4 bg-white text-center border-t border-gray-200">
          <p className="text-sm italic text-gray-600">{categoryItem.description}</p>
        </div>
      </Card>
    );
  };
  

export default CategoryCard;