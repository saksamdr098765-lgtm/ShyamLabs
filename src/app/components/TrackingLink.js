"use client";

import Link from "next/link";

export default function TrackingLink({
  href,
  tracking,
  category,
  action,
  children,
  className,
  onClick,
  ...props
}) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
