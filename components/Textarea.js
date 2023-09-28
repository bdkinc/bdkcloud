import { forwardRef } from "react";

const Textarea = forwardRef(({ className, children, ...props }, ref) => (
  <textarea
    cols="30"
    rows="10"
    className={`form-textarea rounded w-full border border-gray-300 outline-none bg-gray-100 focus:ring-blue-400 focus:ring-2 focus:ring-opacity-50 focus:border-blue-400 dark:bg-gray-800 dark:border-gray-600 ${className}`}
    ref={ref}
    {...props}
  >
    {children}
  </textarea>
));

export default Textarea;
