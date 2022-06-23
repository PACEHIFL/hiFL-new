import React, { useId } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      name: "About",
      links: [
        { title: "About HiFL", path: "/about" },
        { title: "FAQs", path: "/faqs" },
        { title: "Contact", path: "/contact" },
      ],
    },
    {
      name: "Media",
      links: [
        { title: "Videos", path: "/videos" },
        { title: "Gallery", path: "/gallery" },
        { title: "Blog", path: "/blog" },
      ],
    },
  ];
  return (
    <>
      <div className="bg-[url('/footer-bg.png')] text-white bg-cover bg-centers font-redhat">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 py-20 max-w-[94%] md:max-w-[90%] mx-auto">
          <div className="w-full flex flex-col items-center lg:items-start">
            <div>
              <Image src="/hifl-footer.png" alt="HiFL Logo" width={179} height={102} />
            </div>
            <p className="font-extralight mt-2 text-center lg:text-left xl:max-w-[300px] px-10 lg:px-0">
              A Member of Higher Institutions Sports League as created & managed by PACE Sports and Entertainment
              Marketing Ltd.
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-start">
            <div className="flex justify-evenly text-center md:text-left w-[80%] gap-5 lg:w-full">
              {footerLinks.map(({ name, links }, i) => (
                <div key={i} className="w-full">
                  <h2 className="font-bold mb-5 text-lg">{name}</h2>
                  <div className="flex flex-col gap-4">
                    {links.map(({ title, path }) => (
                      <Link href={path} key={path}>
                        <a>{title}</a>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col items-center lg:items-start">
            <h2 className="font-bold mb-5 text-lg">Organizers</h2>
            <div className="flex gap-4 ">
              <a href="https://nuga.com.ng" target="_blank">
                <Image src="/nuga-logo.png" alt="Nuga Logo" width={93} height={76} className="cursor-pointer" />
              </a>
              <a href="https://psemltd.com" target="_blank">
                <Image src="/pace-logo.png" alt="Pace Logo" width={152} height={76} className="cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center items-center font-redhat p-3">
        <div className="text-[#3A3A3A] text-sm flex flex-col lg:flex-row gap-3 items-center">
          <h6 className="text-center">ALL RIGHT RESERVED Higher Institutions Football League © 2018 - {currentYear}</h6>
          <div className="flex gap-3 items-center font-semibold">
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
            <Link href="/terms-of-use">
              <a>Terms of Use</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
