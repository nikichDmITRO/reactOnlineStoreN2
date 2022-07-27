import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);
  const btnClassName = details ? "bg-yellow-400" : "bg-blue-400";
  const btnClasses = ["py2 px4 border", btnClassName];
  return (
    <div className="border py-2 px-4 roundet flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <span className="font-bold">{product.price}</span>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide Detaild" : "Show Details"}
      </button>

      {details && (
        <div>
          <p>{product.description}</p>
          <p>Rate:<span style={{fontWeight:'bold' }}>{product.rating.rate}</span></p>
        </div>
      )}
    </div>
  );
}