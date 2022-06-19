import React from "react";
import Link from "next/link";

const Orders = () => {
  const orderHistory = [
    {
      img: "/hifl-ball.png",
      name: "HiFL Official Fan Football Coloured Strip",
      link: "#",
      orderId: "2345897",
      status: "order in progress",
      datedelivered: "",
      expectedDelivery: ["24-04-2022", "29-04-2022"],
    },
    {
      img: "/hifl-cap.png",
      name: "HiFL Red Crest Cap",
      link: "#",
      orderId: "2804897",
      status: "delivered",
      datedelivered: "24-04-2022",
      expectedDelivery: null,
    },
    {
      img: "/hifl-cap.png",
      name: "HiFL Red Crest Cap",
      link: "#",
      orderId: "2804897",
      status: "delivered",
      datedelivered: "24-04-2022",
      expectedDelivery: null,
    },
  ];
  return (
    <div className="flex flex-col gap-2 font-redhat">
      {orderHistory.map(({ img, name, link, orderId, status, datedelivered, expectedDelivery }, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row items-center gap-3 md:gap-6 px-4 md:px-6 py-4 border border-[#F4F4F4]">
          <div className="flex justify-center mx-auto w-full md:w-[100px]">
            <img src={img} alt={name} className="" />
          </div>

          <div className="w-full space-y-1">
            <div className="flex justify-between items-center">
              <h3 className="text-sm md:text-base">{name}</h3>
              <Link href={link}>
                <a className="text-accent uppercase text-sm hidden lg:block">See details</a>
              </Link>
            </div>
            <p className="text-[#7E7E7E] text-sm md:text-base">Order {orderId}</p>
            <p
              className={`${
                status == "order in progress" ? "bg-[#0D6C8C]" : status == "delivered" ? "bg-[#00AB11]" : "bg-accent"
              } inline-flex px-2 text-white text-sm uppercase rounded`}>
              {status}
            </p>
            <div className="text-sm md:text-base">
              {datedelivered && <p>On {datedelivered}</p>}
              {expectedDelivery && (
                <p>
                  Expected delivery between {expectedDelivery[0]} and {expectedDelivery[1]}
                </p>
              )}
            </div>
            <Link href={link}>
              <a className="text-accent uppercase text-sm lg:hidden">See details</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
