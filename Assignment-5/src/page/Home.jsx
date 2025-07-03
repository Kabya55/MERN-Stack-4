import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import ProductItem from "../components/ProductItem";
import { useState, useEffect } from "react";

function Home() {
  const { products, cart, handleCartAction } = useContext(StoreContext);
  const [sortOrder, setSortOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);

  // Product search and sorting
  useEffect(() => {
    let filteredProducts = [...products];

    if (searchQuery !== "") {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOrder === "highToLow") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else {
      filteredProducts.sort((a, b) => a.price - b.price);
    }

    setSortedProducts(filteredProducts);
  }, [searchQuery, sortOrder, products]);

  useEffect(() => {
    setSortOrder("highToLow");
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-6 search-box px-4">
        <div className="search_by_p_name">
          <input
            className="mt-3 p-2 bg-gray-50 border border-[#20B2AA] text-sm rounded-sm"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products"
          />
        </div>

        <div className="filter_low_to_high">
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
            className="mt-3 p-2 bg-gray-50 border border-[#20B2AA] text-sm rounded-sm"
          >
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts &&
          sortedProducts.map((product) => {
            const isInCart = cart.some((item) => item.id === product.id);

            return (
              <ProductItem
                key={product.id}
                onSmash={handleCartAction}
                isInCart={isInCart}
                product={product}
              />
            );
          })}
      </div>
    </>
  );
}

export default Home;
