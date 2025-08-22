"use client";
import React from "react";
import Link from "next/link";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

type CustomButtonProps = {
  title: string;
  link: string;
};

export default function CustomButton({ title, link }: CustomButtonProps) {
  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as={Link}
      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 font-medium cursor-pointer"
      href={link}
    >
      {title}
    </HoverBorderGradient>
  );
}
