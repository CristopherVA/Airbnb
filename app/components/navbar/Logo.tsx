"use client";

import Image from "next/image";
import { useRouter } from "next/router";

import LogoPath from "../../../public/images/logo.png";

const Logo = () => {
  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height="100"
      width="100"
      src={LogoPath}
    />
  );
};
export default Logo;
