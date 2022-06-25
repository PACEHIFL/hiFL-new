import React, { useState, useEffect } from "react";
import LatestNews from "../shared/LatestNews";
import LatestVideos from "../shared/LatestVideos";
import ProductCard from "../store/ProductCard";
import { BeatLoader } from "react-spinners";
import useFetch from "../../hooks/useFetch";

const Store = () => {
  const [items, setItems] = useState(0);
  const baseURL = process.env.CMS_URL;
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("Kit");
  const [products, setProducts] = useState([]);
  const { data, loading } = useFetch(`${baseURL}/products?populate=*`);

  const sortItems = ["Kit", "Equipment", "Wearable"];

  const handleFilter = (category) => {
    const newProducts = products?.filter((product) => product.Category == category);
    setFilteredProducts(newProducts);
  };

  useEffect(() => {
    handleFilter(filterCategory);
  }, [filterCategory]);

  useEffect(() => {
    if (data) {
      setFilteredProducts(data.data);
      setProducts(data.data);
    }
  }, [data]);

  return (
    <div className="font-redhat">
      <div className="bg-gray-200 mb-10">
        <div className="bg-gray-200 p-4 border-b-2 border-b-gray-700">
          <p className="text-secondary font-bold text-xl md:px-10">
            Categories:
            {filterCategory && (
              <span className="ml-2">
                {filteredProducts.length} {filterCategory} found
              </span>
            )}
          </p>{" "}
        </div>

        <div className="flex items-center justify-between gap-5 md:gap-10 overflow-scroll lg:overflow-hidden scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-200 h-28 max-w-6xl mx-auto px-5">
          {sortItems.map((item, idx) => (
            <div
              key={idx}
              className={`${
                items === idx ? "bg-secondary" : " bg-gray-300"
              } p-4 w-full text-center font-bold text-white cursor-pointer rounded-xl`}
              onClick={() => {
                setFilterCategory(item), setItems(idx);
              }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {loading && (
              <div className="h-[400px] flex justify-center items-center">
                <BeatLoader loading={loading} color="#000229" />
              </div>
        )}

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
          {filteredProducts.length !== 0 ? filteredProducts?.map((product, i) => (
            <ProductCard product={product} key={i} />
          )) : <h1 className="text-center text-xl"> No search item found </h1>}
        </div>
      </div>

      <div className="w-full lg:w-8/12 xl:w-9/12">
        <LatestNews />
        <LatestVideos />
      </div>
    </div>
  );
};

export default Store;
