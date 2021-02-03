import classnames from "classnames";

export default function Button({
  variant = "default",
  className = "",
  anchor = false,
  children,
  ...props
}) {
  const classes = classnames(
    "px-6 py-2 rounded-full cursor-pointer",
    className,
    {
      "bg-black text-white font-bold": variant === "primary",
      "bg-gray-200": variant === "default",
      "bg-teal-500 text-white font-bold": variant === "secondary",
    }
  );
  return anchor ? (
    <a className={classes} {...props}>
      {children}
    </a>
  ) : (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
