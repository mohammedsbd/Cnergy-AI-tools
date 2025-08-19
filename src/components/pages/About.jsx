import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Headphones", price: 199 },
  { id: 3, name: "Keyboard", price: 89 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-3">Shop</h1>
      <div className="grid grid-cols-2 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border p-3 rounded">
            <h2>{p.name}</h2>
            <p>${p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="bg-blue-500 text-white px-2 py-1 mt-2 rounded"
            >
              Add
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-lg font-semibold mt-4">Cart</h2>
      <ul>
        {cart.map((item, i) => (
          <li key={i}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p className="font-bold mt-2">Total: ${total}</p>
    </div>
  );
}
