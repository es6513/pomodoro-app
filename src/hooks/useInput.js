import { useState } from "react";

function useInput(initValue) {
  const [value, setInputValue] = useState(initValue);

  const initializeValue = () => {
    setInputValue(initValue);
  };

  const bindingProps = {
    value,
    onChange: (e) => {
      setInputValue(e.target.value);
    },
  };

  return [bindingProps, initializeValue];
}

export default useInput;
