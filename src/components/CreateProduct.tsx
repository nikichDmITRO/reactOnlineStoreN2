import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";
import Errors from "./Errors";

const productData: IProduct = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};

export default function CreateProduct() {
  const [value, setValue] = useState(" ");
  const [error, setError] = useState(" ");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(" ");
    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }
    productData.title = value;

    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
  };

  const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full "
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />
      {error && <Errors error={error} />}
      <button className="py-2 px-4 border bg-yellow-400 hover:text-white">
        Create
      </button>
    </form>
  );
}