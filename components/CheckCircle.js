import { forwardRef } from "react";
import { FaCheck } from "react-icons/fa";

export default forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`text-bdk-blue w-12 h-12 rounded-full border-2 border-bdk-blue flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow ${
      className || ""
    }`}
    {...props}
  >
    <FaCheck size={24} />
  </div>
));
