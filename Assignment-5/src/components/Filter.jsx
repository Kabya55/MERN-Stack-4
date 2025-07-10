// src/components/ProductFilter.jsx

import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/productsData";
import { StoreContext } from "../context/StoreContext";

function ProductItem({ product, onSmash, isInCart }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="border border-[#20B2AA] p-4 rounded-lg shadow hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">
        {product.title.slice(0, 23)}
      </h3>
      <p className="text-green-600 font-bold">${product.price}</p>
      <p className="text-sm text-gray-600 mt-2">
        {product.description.slice(0, 50)}
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSmash(product, isInCart);
        }}
        className={`mt-4 w-full py-2 rounded transition ${
          isInCart
            ? "bg-red-700 hover:bg-red-500"
            : "bg-[#20B2AA] hover:bg-[#008B8B]"
        } text-white`}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default function ProductFilter() {
  const { searchTerm, setSearchTerm } = useContext(StoreContext);
  const [sortOrder, setSortOrder] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts = products
    .filter((product) =>
      (product.title + product.description)
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  const handleCartToggle = (product, isInCart) => {
    if (isInCart) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems([...cartItems, product]);
    }
  };
  const inputRef = useRef(null);
  useEffect(() => {
    function onSmash(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setSearchTerm("");
      }
    }
    document.addEventListener("click", onSmash);
    return () => {
      document.removeEventListener("click", onSmash);
    };
  }, [setSearchTerm]);
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded w-full sm:w-1/2"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-4 py-2 rounded w-full sm:w-1/4"
        >
          <option value="">Sort by Price</option>
          <option value="lowToHigh">Low ➜ High</option>
          <option value="highToLow">High ➜ Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            isInCart={cartItems.some((item) => item.id === product.id)}
            onSmash={handleCartToggle}
          />
        ))}
      </div>
    </div>
  );
}
