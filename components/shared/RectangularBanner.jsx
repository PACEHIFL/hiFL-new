import React from "react";
import Image from "next/image";
import Link from "next/link";

const RectangularBanner = ({ source, link }) => {
  return (
    <Link href={link}>
      <a className="rounded">
        <Image src={source} alt="" width={600} height={93} layout="responsive" objectFit="contain" />
      </a>
    </Link>
  );
};

export default RectangularBanner;
