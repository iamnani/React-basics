import { useState } from "react";
function useInputHook() {
  const [value, setValue] = useState("");
  const bind = {
    value: value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  const reset = () => {
    setValue("");
  };

  return [value, bind, reset];
}

export default useInputHook;
