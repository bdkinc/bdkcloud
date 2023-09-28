import { forwardRef } from "react";

const Input = forwardRef(({ className, ...props }, ref) => (
  <input
    type="text"
    className={`form-input rounded w-full border border-gray-300 outline-none bg-gray-100 focus:ring-blue-400 focus:ring-2 focus:ring-opacity-50 focus:border-blue-400 dark:bg-gray-800 dark:border-gray-600 ${className}`}
    ref={ref}
    {...props}
  />
));

export default Input;
