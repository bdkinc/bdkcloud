import { forwardRef } from "react";

const CardTitle = forwardRef(({ className, children, ...props }, ref) => (
  <header
    ref={ref}
    className={`text-3xl font-semibold leading-loose text-bdk-blue-darker dark:text-white ${
      className || ""
    }`}
    {...props}
  >
    {children}
  </header>
));

const CardBody = forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={`mb-3 flex-1 ${className || ""}`} {...props}>
    {children}
  </div>
));

const CardFooter = forwardRef(({ className, children, ...props }, ref) => (
  <footer ref={ref} className={className || ""} {...props}>
    {children}
  </footer>
));

const Card = forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={`rounded shadow-lg p-8 border-2 border-bdk-blue flex flex-col bg-gradient-to-t from-gray-200 to-gray-100 dark:from-gray-900 dark:to-gray-800 ${
      className || ""
    }`}
    {...props}
  >
    {children}
  </div>
));

export { Card, CardTitle, CardBody, CardFooter };
