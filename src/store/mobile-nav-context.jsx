import React from "react";

const MobileNavContext = React.createContext({
  isShown: false,
  toggleMobileNav: () => {},
});

export default MobileNavContext;
