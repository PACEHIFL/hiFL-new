import React from "react";
import Image from "next/image";
import Link from "next/link";

const SquareBanner = ({ source, link }) => {
  return (
    <Link href={link}>
      <a className="rounded">
        <Image src={source} alt="" width="100%" height="100%" layout="responsive" objectFit="cover" />
      </a>
    </Link>
  );
};

export default SquareBanner;
