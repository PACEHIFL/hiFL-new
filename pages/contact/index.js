import Image from "next/image";
import React, { useState } from "react";
import InputField from "../../components/authpages/InputField";
import LatestNews from "../../components/shared/LatestNews";
import PageTitle from "../../components/shared/PageTitle";
import Sponsors from "../../components/shared/Sponsors";

const Contact = () => {
  const initialSubscribe = {
    email: "",
    firstName: "",
    lastName: "",
    hiflUpdates: false,
    hiflGameTime: false,
    hiflPromo: false,
  };
  const initialContact = { fullName: "", subject: "", email: "", message: "" };

  const [subscribeData, setSubscribeData] = useState(initialSubscribe);
  const [contactData, setContactData] = useState(initialContact);

  const contactDetails = [
    { title: "Drop a line", content: "For enquiries, comments and partnerships, let's talk contact@hiflng.com" },
    { title: "Call us", content: "+234 (0)60125456789" },
    { title: "Find us", content: "7, Talabi Street, Adeniyi Jones, Ikeja, Lagos" },
  ];

  const handleSubscribeChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setSubscribeData({ ...subscribeData, [name]: val });
  };
  const handleContactChange = (e) => {
    const { type, name, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setContactData({ ...contactData, [name]: val });
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault;
  };
  const handleContactSubmit = (e) => {
    e.preventDefault;
  };

  return (
    <div className="font-redhat bg-white text-[#000229]">
      <PageTitle name="Contact Us" />
      <div className="max-w-[95%] md:max-w-[90%] mx-auto min-h-[300px] py-8">
        <div className="flex flex-col md:flex-row gap-3 md:gap-6">
          {contactDetails.map(({ title, content }, i) => (
            <div className="border border-[#D0D0D0] rounded-lg w-full p-4 lg:p-6" key={i}>
              <h2 className="font-bold lg:text-lg mb-2 lg:mb-4">
                {i + 1}. {title}
              </h2>
              <p className="text-sm lg:text-base">{content}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 my-8">
          <div className="w-full border border-[#D0D0D0] rounded-lg p-6">
            <h2 className="font-bold text-lg lg:text-xl mb-1">Signup for latest updates on HiFL!</h2>
            <p className="italic mb-8">Join our mailing list.</p>
            <form className="text-sm" onSubmit={handleSubscribeSubmit}>
              <div className="mb-8 relative">
                <InputField
                  type="email"
                  name="email"
                  onChange={handleSubscribeChange}
                  placeholder="Email Address"
                  data={subscribeData}
                  required
                />
              </div>
              <div className="mb-8 relative">
                <InputField
                  type="text"
                  name="firstName"
                  onChange={handleSubscribeChange}
                  placeholder="First Name"
                  data={subscribeData}
                />
              </div>
              <div className="relative">
                <InputField
                  type="text"
                  name="lastName"
                  onChange={handleSubscribeChange}
                  placeholder="Last Name"
                  data={subscribeData}
                />
              </div>
              {/* checkboxes */}
              <div className="space-y-2 my-8">
                <div className="">
                  <div className="flex gap-3 items-center">
                    <input
                      type="checkbox"
                      name="hiflUpdates"
                      checked={subscribeData.hiflUpdates}
                      onChange={handleSubscribeChange}
                      className="checkbox checkbox-xs checkbox-primary border-[#767670] outline-none rounded-sm"
                    />
                    <p>HiFL Updates</p>
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-3 items-center">
                    <input
                      type="checkbox"
                      name="hiflGameTime"
                      checked={subscribeData.hiflGameTime}
                      onChange={handleSubscribeChange}
                      className="checkbox checkbox-xs checkbox-primary border-[#767670] outline-none rounded-sm"
                    />
                    <p>HiFL GameTime</p>
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-3 items-center">
                    <input
                      type="checkbox"
                      name="hiflPromo"
                      checked={subscribeData.hiflPromo}
                      onChange={handleSubscribeChange}
                      className="checkbox checkbox-xs checkbox-primary border-[#767670] outline-none rounded-sm"
                    />
                    <p>Promos & Offers</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p>
                  You can unsubscribe at any time by clicking the link in the footer of our emails. For information
                  about our privacy practices, please visit our website.
                </p>
                <p>
                  We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your
                  information will be transferred to Mailchimp for processing. Learn more about Mailchimp's privacy
                  practices here.
                </p>
              </div>
              <button className="btn btn-wide btn-primary capitalize mt-8"> Subscribe</button>
            </form>
          </div>

          <div className="w-full border border-[#D0D0D0] rounded-lg p-6">
            <h2 className="font-bold text-lg lg:text-xl mb-1">Get in touch with us</h2>
            <p className="italic mb-8">
              As we continue to build one of the world's largest and most sustainable collegiate football competition,
              we remain committed to feedback.
            </p>
            <form className="text-sm" onSubmit={handleContactSubmit}>
              <div className="mb-8 relative">
                <InputField
                  type="text"
                  name="fullName"
                  onChange={handleContactChange}
                  placeholder="Your Name"
                  data={contactData}
                  required
                />
              </div>
              <div className="mb-8 relative">
                <InputField
                  type="text"
                  name="subject"
                  onChange={handleContactChange}
                  placeholder="Subject"
                  data={contactData}
                  required
                />
              </div>
              <div className="mb-8 relative">
                <InputField
                  type="email"
                  name="email"
                  onChange={handleContactChange}
                  placeholder="Email Address"
                  data={contactData}
                  required
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  onChange={handleContactChange}
                  placeholder="Your Message"
                  className="w-full border-b border-[#767670] py-2 px-4 outline-none rounded bg-[#E8E8E8] focus:bg-[#FBFBFB]"
                  data={contactData}
                  rows={8}
                  required
                />
              </div>
              <button className="btn btn-wide btn-primary capitalize mt-8">Submit</button>
            </form>
          </div>
        </div>
        <div className="mt-6">
          <LatestNews />
        </div>
      </div>
    </div>
  );
};

export default Contact;
