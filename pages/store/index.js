import React, { useState, useEffect } from "react";
import StoreLayout from "../../components/layout/StoreLayout";
import Link from "next/link";
import ProductCard from "../../components/store/ProductCard";
import useFetch from "../../hooks/useFetch";
import Skeleton from "react-loading-skeleton";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [productNumber, setProductNumber] = useState(9);

  const baseURL = process.env.CMS_URL;
  const { data, loading } = useFetch(`${baseURL}/products?populate=*`);

  const sortItems = ["All", "Kit", "Equipment", "Wearable"];

  const handleFilter = (category) => {
    if (category == "All" || category == "") {
      setFilteredProducts(products);
      return;
    }

    const newProducts = products?.filter((product) => product.Category == category);
    setFilteredProducts(newProducts);
  };
  const handleShowMore = () => {
    setProductNumber(productNumber + 9);
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
    <StoreLayout>
      <div className="mb-10">
        {/* <div className="mb-6">
          <Link href="#">
            <a>
              <img src="/store-banner1.png" alt="" className="w-full" />
            </a>
          </Link>
        </div> */}

        <div className="flex flex-col md:flex-row gap-4">
          <Link href="#">
            <a className="">
              <img src="/store-banner2.png" alt="" className="w-full md:w-auto" />
            </a>
          </Link>
          <Link href="#">
            <a className="">
              <img src="/store-banner3.png" alt="" className="w-full md:w-auto" />
            </a>
          </Link>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center border-b border-warning pb-1 mb-4">
          <h2 className="text-lg xl:text-xl font-semibold">Shop your favourite merchandize</h2>
          <div className="flex gap-1 items-center text-sm">
            <h3>Sort by:</h3>
            <div className="flex gap-1 items-center cursor-pointer">
              <div className="dropdown xl:dropdown-hover dropdown-end">
                <label tabIndex="0" className="m-1 text-[#767575] cursor-pointer">
                  {filterCategory || "Category"}
                </label>
                <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box divide-y">
                  {sortItems.map((item, i) => (
                    <li className="p-2" onClick={() => setFilterCategory(item)} key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img src="/stroke-down.png" alt="" className="w-[12px]" />
              </div>
            </div>
          </div>
        </div>
        {filterCategory && filterCategory !== "All" && (
          <p>
            {filteredProducts.length} {filterCategory} found
          </p>
        )}
        <div className="mt-4 pt-16 pb-6 border-t border-[#AFAFAF] place-items-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-12 text-secondary">
          {loading ? (
            <>
              <div className="w-full">
                <Skeleton height={300} />
              </div>
              <div className="w-full">
                <Skeleton height={300} />
              </div>
              <div className="w-full">
                <Skeleton height={300} />
              </div>
            </>
          ) : (
            filteredProducts?.slice(0, productNumber).map((product, i) => <ProductCard product={product} key={i} />)
          )}
        </div>
        <div className="flex justify-center items-center">
          {filteredProducts.length > 9 && productNumber < filteredProducts.length && (
            <button className="btn btn-primary btn-wide normal-case text-white text-sm mt-6" onClick={handleShowMore}>
              Load More
            </button>
          )}
        </div>
      </div>
    </StoreLayout>
  );
};

export default Store;
