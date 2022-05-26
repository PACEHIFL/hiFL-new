import Image from "next/image";
import React from "react";
import LatestNews from "../../components/shared/LatestNews";
import PageTitle from "../../components/shared/PageTitle";
import Sponsors from "../../components/shared/Sponsors";

const Contact = () => {
  const contactDetails = [
    { title: "Drop a line", content: "For enquiries, comments and partnerships, let's talk contact@hiflng.com" },
    { title: "Call us", content: "+234 (0)60125456789" },
    { title: "Find us", content: "7, Talabi Street, Adeniyi Jones, Ikeja, Lagos" },
  ];
  return (
    <div className="font-redhat bg-white text-[#000229]">
      <PageTitle name="Contact Us" />
      <div className="max-w-[95%] md:max-w-[90%] mx-auto min-h-[300px] py-8">
        <div className="flex gap-6">
          {contactDetails.map(({ title, content }, i) => (
            <div className="border rounded-lg w-full p-6" key={i}>
              <h2 className="font-bold text-lg mb-4">
                {i + 1}. {title}
              </h2>
              <p>{content}</p>
            </div>
          ))}
        </div>
        <div></div>
        <div className="mt-6">
          <LatestNews />
        </div>
        <div className="bg-white">
          <Sponsors />
        </div>
      </div>
    </div>
  );
};

export default Contact;
