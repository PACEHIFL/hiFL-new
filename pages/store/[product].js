import React, { useState } from "react";
import StoreLayout from "../../components/layout/StoreLayout";
import ProductInfo from "../../components/store/ProductInfo";
import SimilarItems from "../../components/store/SimilarItems";
import { product } from "../../helpers/data";

const SingleProduct = () => {
  const initialState = { quantity: 1, size: "", customize: "No", jerseyName: "", jerseyNumber: "" };
  const [orderInfo, setOrderInfo] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const { data } = product;
  const { Title, Price, DiscountPrice, InStock, PreOrder, Details, ProductGallery } = data[0];

  const discountPercent = (price, discount) => (DiscountPrice ? ((price - discount) / price) * 100 : null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderInfo({ ...orderInfo, [name]: value });
  };
  const handleQuantity = (type) => {
    if (type == "increase") {
      setOrderInfo({ ...orderInfo, quantity: orderInfo.quantity + 1 });
    }
    if (type == "reduce" && orderInfo.quantity > 1) {
      setOrderInfo({ ...orderInfo, quantity: orderInfo.quantity - 1 });
    }
  };
  const handleAddToCart = (e) => {
    e.preventDefault();
  };

  const productImages = ProductGallery.map((image) => image.url);

  return (
    <StoreLayout>
      <div className="font-redhat text-secondary">
        <div className="flex justify-between items-center border-b border-warning pb-1">
          <h2 className="text-lg xl:text-xl font-semibold">{Title}</h2>
          <div>
            <img src="/star.png" className="hidden md:block" />
          </div>
        </div>
        <div className="flex justify-end">
          <p className="px-10 py-3 bg-warning bg-opacity-50 text-[#3A3A3A]">
            -{discountPercent(Price, DiscountPrice)}%
          </p>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row mb-4">
          {/* Product Images */}
          <div className="w-full md:w-8/12 h-fit flex flex-col-reverse gap-4 md:gap-0 md:flex-row">
            <div className="w-full md:w-4/12 p-4 flex md:flex-col gap-4 bg-[#F9F7F7] rounded-lg">
              {productImages?.map((image, i) => (
                <div className="flex justify-center" key={i}>
                  <img src={image} alt="product title" className="cursor-pointer" onClick={() => setCurrentImage(i)} />
                </div>
              ))}
            </div>
            <div className="w-full md:w-8/12 flex justify-center items-center">
              <img src={productImages[currentImage]} alt="product title" className="cursor-pointer w-[80%]" />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-5/12">
            <ProductInfo
              data={data[0]}
              orderInfo={orderInfo}
              handleChange={handleChange}
              handleQuantity={handleQuantity}
              handleAddToCart={handleAddToCart}
            />
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <h2 className="border-b border-warning pb-1 text-lg xl:text-xl font-semibold uppercase">details</h2>
          <div dangerouslySetInnerHTML={{ __html: Details }} className="space-y-6 text-justify"></div>
        </div>

        {/* Similar Items */}
        <div className="mt-4">
          <SimilarItems />
        </div>
      </div>
    </StoreLayout>
  );
};

export default SingleProduct;
