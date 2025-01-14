import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { formatMoney } from "../../helpers/utils";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart.slice";

const ProductInfo = ({ data, orderInfo, setOrderInfo, initialState, handleQuantity, handleChange, loading }) => {
  const small = useRef();
  const medium = useRef();
  const large = useRef();
  const customizeYes = useRef();
  const customizeNo = useRef();
  const router = useRouter();
  const dispatch = useDispatch();

  //const { Price, DiscountPrice, InStock, PreOrder, Details, ProductGallery } = data;

  const handleAddToCart = (e) => {
    e.preventDefault();

    if (orderInfo.size == "") {
      toast.error("Please select a size", { autoClose: 1500 });
      return;
    }
    if (orderInfo.customize == "Yes" && orderInfo.jerseyName == "" && orderInfo.jerseyNumber == "") {
      toast.error("Please fill in custom details", { autoClose: 1500 });
      return;
    }
    toast.success("Item added to cart", { autoClose: 1000, onClose: () => router.push("/store/cart") });
    const payload = {
      ProductCode: data.ProductCode,
      Title: data.Title,
      Price: data.Price,
      DiscountPrice: data.DiscountPrice,
      Size: orderInfo.size,
      Quantity: orderInfo.quantity,
      CoverImage: data.CoverImage[0],
      Customization: { JerseyName: orderInfo.jerseyName, JerseyNumber: orderInfo.jerseyNumber },
    };
    dispatch(addToCart({ ...payload }));
    // setOrderInfo(initialState);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-[#7E7E7E] text-xs font-semibold uppercase mb-2">Price</h3>
        <div className="flex gap-1 items-end text-2xl font-bold">
          {data?.DiscountPrice && <p className="">{formatMoney(data?.DiscountPrice)}</p>}
          <p className={`${data?.DiscountPrice && "text-sm text-[#D0D0D0] line-through"}  `}>
            {formatMoney(data?.Price)}
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-[#7E7E7E] text-xs font-semibold uppercase mb-2">Quantity</h3>
        <div className="flex items-center text-[#7E7E7E]">
          <p
            className="px-4 py-2 border border-[#7E7E7E80] border-opacity-50 rounded-l-md cursor-pointer select-none"
            onClick={() => handleQuantity("reduce")}>
            -
          </p>
          <p className="px-8 py-2 border-y border-[#7E7E7E80]">{orderInfo.quantity}</p>
          <p
            className="px-4 py-2 border border-[#7E7E7E80] border-opacity-50 rounded-r-md cursor-pointer select-none"
            onClick={() => handleQuantity("increase")}>
            +
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-[#7E7E7E] text-xs font-semibold uppercase mb-2">Available sizes</h3>
        <div className="flex gap-3 items-center text-[#7E7E7E]" onChange={handleChange}>
          <div>
            <input type="radio" name="size" value="S" className="hidden" ref={small} />
            <p
              className={`${
                orderInfo.size == "S" && "bg-[#7E7E7E] text-white"
              } px-4 py-2 border border-[#7E7E7E80] border-opacity-50 rounded-md cursor-pointer select-none`}
              onClick={() => small.current.click()}>
              S
            </p>
          </div>
          <div>
            <input type="radio" name="size" value="M" className="hidden" ref={medium} />
            <p
              className={`${
                orderInfo.size == "M" && "bg-[#7E7E7E] text-white"
              } px-4 py-2 border border-[#7E7E7E80] border-opacity-50 rounded-md cursor-pointer select-none`}
              onClick={() => medium.current.click()}>
              M
            </p>
          </div>
          <div>
            <input type="radio" name="size" value="L" className="hidden" ref={large} />
            <p
              className={`${
                orderInfo.size == "L" && "bg-[#7E7E7E] text-white"
              } px-4 py-2 border border-[#7E7E7E80] border-opacity-50 rounded-md cursor-pointer select-none`}
              onClick={() => large.current.click()}>
              L
            </p>
          </div>
        </div>
      </div>
      <div>
        {data?.Customizable && (
          <>
            <h3 className="text-[#7E7E7E] text-xs font-semibold uppercase mb-2">Customize</h3>
            <div className="flex gap-3 items-center text-[#7E7E7E]" onChange={handleChange}>
              <div>
                <input type="radio" name="customize" value="Yes" className="hidden" ref={customizeYes} />
                <p
                  className={`${
                    orderInfo.customize == "Yes" && "bg-[#7E7E7E] text-white"
                  } px-4 py-2 border border-[#7E7E7E80] border-opacity-50 rounded-md cursor-pointer select-none uppercase`}
                  onClick={() => customizeYes.current.click()}>
                  Yes
                </p>
              </div>
              <div>
                <input type="radio" name="customize" value="No" className="hidden" ref={customizeNo} />
                <p
                  className={`${
                    orderInfo.customize == "No" && "bg-[#7E7E7E] text-white"
                  } px-4 py-2 border border-[#7E7E7E80] border-opacity-50 rounded-md cursor-pointer select-none uppercase`}
                  onClick={() => customizeNo.current.click()}>
                  No
                </p>
              </div>
            </div>
          </>
        )}

        <form className="mt-4 space-y-6 " onSubmit={handleAddToCart}>
          {orderInfo.customize == "Yes" && (
            <>
              <input
                type="text"
                name="jerseyName"
                value={orderInfo.jerseyName}
                onChange={handleChange}
                placeholder="Name on Jersey"
                className="w-full border text-sm border-[#7E7E7E80] mt-1 py-3 px-4 outline-none rounded"
              />
              <input
                type="text"
                name="jerseyNumber"
                value={orderInfo.jerseyNumber}
                onChange={handleChange}
                placeholder="Jersey Number"
                className="w-full border text-sm border-[#7E7E7E80] mt-1 py-3 px-4 outline-none rounded"
              />{" "}
            </>
          )}
          <button
            className={`${
              loading && "loading"
            } w-full 2xl:btn-wide btn btn-primary disabled:btn-accent disabled:cursor-wait lg:mt-10`}
            disabled={!data?.InStock && !data?.PreOrder}>
            {loading
              ? ""
              : !data?.InStock && !data?.PreOrder
              ? "Out of Stock"
              : !data?.InStock && data?.PreOrder
              ? "Pre Order"
              : "Add to Cart"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductInfo;
