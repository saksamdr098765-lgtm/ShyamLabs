"use client";

export default function TrackedPhoneLink({
  phone,
  tracking = "phone-call",
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
    <a
      href={`tel:${phone}`}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
