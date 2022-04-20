import { useState } from "react";

export const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  function toggle() {
    console.log("modal " + !isShown);
    setIsShown(!isShown);
  }
  return {
    isShown,
    toggle,
  };
};
