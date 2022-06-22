import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Group, Rect } from "react-konva";

const App = () => {
  function generateShapes() {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    return [...Array(6)].map((_, i) => ({
      id: i.toString(),
      x: i * 30 + 10,
      y: i * 30 + 10,
      colors: colors[i],
    }));
  }
  const INITIAL_STATE = generateShapes();
  const [rects, setRects] = useState(INITIAL_STATE);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {rects.map((star) => (
          <Group draggable>
            <Rect
              key={star.id}
              x={star.x}
              y={star.y}
              width={100}
              height={50}
              fill={star.colors}
              stroke={"black"}
              strokeWidth={4}
            />
          </Group>
        ))}
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
