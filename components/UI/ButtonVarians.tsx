"use client";
import clsx from "clsx";
import Link from "next/link";

interface VarianstStyleProps extends React.HTMLAttributes<HTMLElement> {
  variants?: "primary" | "outline";
  children?: React.ReactNode;
  href?: string;
}

export const ButtonVariant = ({
  children,
  variants = "primary",
  className,
  href,
  ...props
}: VarianstStyleProps) => {
  className = clsx(
    "text-white ring-2",
    "rounded-md transition-all duration-300 py-2 px-4",
    variants === "primary" && "hover:ring-gray-300 bg-blue-500 focus:scale-105",
    variants === "outline" &&
      "text-blue-500 ring-2 hover:ring-blue-700 border-blue-500",
    className
  );

  return href ? (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  ) : (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
