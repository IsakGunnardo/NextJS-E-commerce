"use client";
import React, { useState } from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: any;
  variantId: string;
  stockNumber: number;
}) => {
  const [quantity, setQuantity] = useState(1);

  //   TEMPORARY
  // const stock = 4

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };
  // console.log(stockNumber);
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">{stockNumber}</span> left! <br />{" "}
            Dont miss it
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-ardo text-ardo py-2 px-4 hover:bg-ardo hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-transparent">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
