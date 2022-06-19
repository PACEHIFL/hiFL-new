import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useRouter } from "next/router";
import Link from "next/link";
import { BeatLoader } from "react-spinners";
import StoreLayout from "../../components/layout/StoreLayout";
import ProductInfo from "../../components/store/ProductInfo";
import SimilarItems from "../../components/store/SimilarItems";

const SingleProduct = () => {
  const initialState = { quantity: 1, size: "", customize: "No", jerseyName: "", jerseyNumber: "" };
  const [orderInfo, setOrderInfo] = useState(initialState);
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();
  const id = router.query.id;

  const baseURL = process.env.CMS_URL;
  const product = useFetch(`${baseURL}/products/${id}?populate=*`);
  const data = product?.data?.data;
  const loading = product?.loading;
  const error = product?.error;

  const discountPercent = (price, discount) => (data?.DiscountPrice ? ((price - discount) / price) * 100 : null);

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

  const productImages = data?.ProductGallery?.map((image) => image.url);

  return (
    <StoreLayout>
      <div className="font-redhat text-secondary">
        {loading ? (
          <div className="h-[400px] flex justify-center items-center">
            <BeatLoader loading={loading} color="#000229" />
          </div>
        ) : error ? (
          <div className="h-[400px] flex flex-col justify-center items-center">
            <h2 className="font-bold text-xl lg:text-3xl text-[#000229]">OOPS! Product Not Found</h2>
            <Link href="/store">
              <a className="btn btn-primary btn-wide mt-6 border-none">Continue Shopping</a>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center border-b border-warning pb-1 ">
              <h2 className="text-lg xl:text-2xl font-semibold">{data?.Title}</h2>
              {data?.Featured && (
                <div>
                  <img src="/star.png" className="hidden md:block" />
                </div>
              )}
            </div>
            {data?.DiscountPrice && (
              <div className="flex justify-end">
                <p className="px-10 py-3 bg-warning bg-opacity-50 text-[#3A3A3A]">
                  -{discountPercent(data?.Price, data?.DiscountPrice)}%
                </p>
              </div>
            )}

            {/* Products */}
            <div
              className={`flex flex-col gap-4 md:gap-0 md:flex-row mb-4 placeholder ${
                !data?.DiscountPrice && "mt-10"
              }`}>
              {/* Product Images */}
              <div className="w-full md:w-8/12 h-fit flex flex-col-reverse gap-4 md:gap-0 md:flex-row">
                <div className="w-full md:w-4/12 p-4 flex md:flex-col gap-4 bg-[#F9F7F7] rounded-lg">
                  {productImages?.map((image, i) => (
                    <div className="flex justify-center" key={i}>
                      <img
                        src={image}
                        alt="product title"
                        className="cursor-pointer"
                        onClick={() => setCurrentImage(i)}
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full md:w-8/12 flex justify-center items-center">
                  <img src={productImages?.[currentImage]} alt="product title" className="cursor-pointer w-[80%]" />
                </div>
              </div>

              {/* Product Info */}
              <div className="w-full md:w-5/12">
                <ProductInfo
                  data={data}
                  orderInfo={orderInfo}
                  initialState={initialState}
                  setOrderInfo={setOrderInfo}
                  handleChange={handleChange}
                  handleQuantity={handleQuantity}
                />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6 lg:my-10">
              <h2 className="border-b border-warning pb-1 text-lg xl:text-xl font-semibold uppercase">details</h2>
              <div dangerouslySetInnerHTML={{ __html: data?.Details }} className="space-y-6 text-justify"></div>
            </div>
          </>
        )}

        {/* Similar Items */}
        <div className="mt-4">
          <SimilarItems />
        </div>
      </div>
    </StoreLayout>
  );
};

export default SingleProduct;

// export const getStaticProps = async ({ params: { id } }) => {
//   try {
//     const baseURL = process.env.CMS_URL;
//     const { data, errors } = await axios(`${baseURL}/products/${id}?populate=*`);

//     if (errors || !data) {
//       return { notFound: true };
//     }

//     return {
//       props: {
//         data: data,
//       },
//     };
//   } catch (error) {
//     return { notFound: true };
//   }
// };

// export const getStaticPaths = async () => {
//   try {
//     const baseURL = process.env.CMS_URL;
//     const { data } = await axios(`${baseURL}/products?populate=*`);

//     const ids = data.data.map((post) => post.id);
//     const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//     return {
//       paths,
//       fallback: true,
//     };
//   } catch (error) {
//     return { paths: [], fallback: false };
//   }
// };
