import React, { useState } from "react";
import MobileNavContext from "./mobile-nav-context";

const MobileNavProvider = (props) => {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileNav = () => {
    setIsShown((prevState) => !prevState);
  };

  const mobileNavContext = {
    isShown: isShown,
    toggleMobileNav: toggleMobileNav,
  };

  return (
    <MobileNavContext.Provider value={mobileNavContext}>
      {props.children}
    </MobileNavContext.Provider>
  );
};

export default MobileNavProvider;
