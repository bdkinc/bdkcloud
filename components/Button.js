import { forwardRef } from "react";

const Button = forwardRef(({ className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={`rounded inline-flex items-center justify-center px-4 py-2 text-white font-semibold bg-gradient-to-br dark:bg-gradient-to-tl from-bdk-blue-light via-bdk-blue to-bdk-blue-dark border border-bdk-blue shadow hover:shadow-lg hover:ring-1 hover:ring-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${
      className ? className : ""
    }`}
    {...props}
  >
    {children}
  </button>
));

export default Button;
