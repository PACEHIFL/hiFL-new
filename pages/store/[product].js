import React, { useState } from "react";
import StoreLayout from "../../components/layout/StoreLayout";
import ProductInfo from "../../components/store/ProductInfo";
import SimilarItems from "../../components/store/SimilarItems";

const SingleProduct = () => {
  const initialState = { quantity: 1, size: "", customize: "No", jerseyName: "", jerseyNumber: "" };
  const [orderInfo, setOrderInfo] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

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

  const productImages = ["/hiversa-jersey.png", "/hiversa-back.png", "/hiversa-side.png"];
  return (
    <StoreLayout>
      <div className="font-redhat text-secondary">
        <div className="flex justify-between items-center border-b border-warning pb-1">
          <h2 className="text-lg xl:text-xl font-semibold">UNN Lions Home Authentic Shirt </h2>
          <div>
            <img src="/star.png" className="" />
          </div>
        </div>
        <div className="flex justify-end">
          <p className="px-10 py-3 bg-warning bg-opacity-50 text-[#3A3A3A]">-10%</p>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row mb-4">
          {/* Product Images */}
          <div className="w-full md:w-8/12 h-fit flex flex-col-reverse gap-4 md:gap-0 md:flex-row">
            <div className="w-full md:w-4/12 p-4 flex md:flex-col gap-4 bg-[#F9F7F7] rounded-lg">
              {productImages.map((image, i) => (
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
          <h3 className="font-bold uppercase">Your team, your colours</h3>
          <p>The LASU Blazers Home Authentic Shirt is the same one worn by the team on the pitch.</p>
          <ul>
            <li>Replica style - looser fit across the chest and shoulders with straight hemline</li>
            <li>Fabric: 50% recycled polyester fabric</li>
            <li>Machine wash</li>
          </ul>
          <div>
            <p>Wear your shirt with pride and show your support for the Blazers</p>
            <p>Why not make it your own by having your chosen name and number printed on the back?</p>
          </div>
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
