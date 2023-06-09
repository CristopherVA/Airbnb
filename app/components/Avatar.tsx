"use client";
import React from "react";
import Image from "next/image";

import AvatarPath from "../../public/images/placeholder.jpg";
const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={AvatarPath}
    />
  );
};

export default Avatar;
