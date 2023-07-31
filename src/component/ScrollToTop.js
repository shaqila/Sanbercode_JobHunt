import React, { useEffect } from "react";
import { useLocation } from "react-router"; // Import from react-router, not react-router-dom

const ScrollToTop = () => {
  const location = useLocation(); // Use useLocation hook from react-router

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    handleScrollToTop(); // Scroll to top on initial render
  }, [location]);

  return null;
};

export default ScrollToTop;
