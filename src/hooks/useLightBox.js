import { useState } from "react";

function useLightBox(initValue) {
  const [isLightBoxOpen, setLightBox] = useState(initValue);

  const openLightBox = () => {
    setLightBox(true);
  };

  const closeLightBox = () => {
    setLightBox(false);
  };

  return [isLightBoxOpen, openLightBox, closeLightBox];
}

export default useLightBox;
