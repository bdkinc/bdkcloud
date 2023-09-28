import { forwardRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Layout = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`min-h-screen flex flex-col bg-left-top bg-gray-200 text-gray-800 dark:text-gray-100 dark:bg-gray-900 bg-repeat-y bg-fixed ${className} bg-clouds`}
    >
      {children}
    </div>
  );
});

export default Layout;
