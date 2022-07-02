import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../../../redux/features/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../redux/features/cart.slice";
import Moment from "react-moment";
import { BeatLoader } from "react-spinners";
import OrderModal from "./OrderModal";
import { orderStatusColor } from "../../../helpers/utils";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [orderItems, setOrderItems] = useState(5);
  const [singleOrder, setSingleOrder] = useState({});
  const dispatch = useDispatch();
  const { ordersLoading } = useSelector((state) => state.cart);
  const latestOrders = orders?.data?.sort((a, b) => new Date(a.OrderDate) - new Date(b.OrderDate));

  const getOrders = (userId) => dispatch(fetchOrders({ userId, setOrders }));

  const handleShowMore = () => {
    setOrderItems(orderItems + 5);
  };

  useEffect(() => {
    if (isLoggedIn()) {
      const userId = isLoggedIn().data.User._id;
      getOrders(userId);
    }
  }, []);

  return (
    <>
      {ordersLoading ? (
        <div className="h-[250px] flex justify-center items-center">
          <BeatLoader loading={ordersLoading} color="#000229" />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2 font-redhat">
            {latestOrders
              ?.reverse()
              .slice(0, orderItems)
              .map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row items-center gap-3 md:gap-6 px-4 md:px-6 py-4 border border-[#F4F4F4]">
                  <div className="flex justify-center mx-auto w-full md:w-[100px]">
                    <img src={item.OrderItems[0].CoverImage?.url} alt={item.Title} className="" />
                  </div>

                  <div className="w-full space-y-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm md:text-base">Order Ref: {item.OrderRef}</h3>

                      <label
                        className="text-accent uppercase text-sm hidden lg:block modal-button cursor-pointer"
                        htmlFor="order-modal"
                        onClick={() => setSingleOrder(item)}>
                        See details
                      </label>
                    </div>
                    <p className="text-[#7E7E7E] text-sm md:text-base">
                      Date Placed: <Moment format="MM-DD-YYYY" date={item.OrderDate} />
                    </p>
                    <p
                      className={`${orderStatusColor(
                        item.OrderStatus
                      )} inline-flex px-2 text-white text-sm uppercase rounded`}>
                      {item.OrderStatus}
                    </p>
                    <div className="text-sm md:text-base">
                      {item.datedelivered && <p>On {item.datedelivered}</p>}
                      {item.expectedDelivery && (
                        <p>
                          Expected delivery between {item.expectedDelivery[0]} and {item.expectedDelivery[1]}
                        </p>
                      )}
                    </div>

                    <label
                      className="text-accent uppercase text-sm hidden lg:hidden modal-button cursor-pointer"
                      htmlFor="order-modal">
                      See details
                    </label>
                  </div>
                </div>
              ))}

            {/* Modal Popup */}
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <label htmlFor="order-modal" className="modal cursor-pointer">
              <label className="modal-box relative md:max-w-[80%] lg:max-w-[60%]" htmlFor="">
                <OrderModal singleOrder={singleOrder} />
              </label>
            </label>
            {/* Modal Popup */}
          </div>
          <div className="flex justify-center items-center">
            {orders?.data?.length > 5 && orderItems < orders?.data?.length && (
              <button
                className="btn btn-secondary btn-wide normal-case text-white text-sm mt-6"
                onClick={handleShowMore}>
                Load More
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Orders;
