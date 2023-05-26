"use client";
import React from "react";

interface MenuItemProps {
  onCLick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onCLick, label }) => {
  return (
    <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
      <div>{label}</div>
    </div>
  );
};

export default MenuItem;
