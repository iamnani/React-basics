import React, { useState, useEffect } from "react";

function HookMouseMove() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [display, setDisplay] = useState(true);

  const mouseOverHook = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Use Effect - updated mouse over");
    window.addEventListener("mousemove", mouseOverHook);

    return () => {
      window.removeEventListener("mouseover", mouseOverHook);
    };
  }, []);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}> Toggle </button>
      {display ? (
        <div>
          {x} - {y}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default HookMouseMove;
