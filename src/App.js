import React, { useRef } from "react";
import "./index.css";
import Draggable from "@juham/draggable";

function App() {
  const refHandle = useRef(null);

  return (
    <Draggable handleRef={refHandle} onMove={(x, y) => console.log(x, y)}>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "pink",
        }}
      >
        <button ref={refHandle} type="button">
          Move
        </button>
      </div>
    </Draggable>
  );
}

export default App;
