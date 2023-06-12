import React from "react";

const TextInputLoading = () => {
  const numberLines = 1;

  const containerStyle = {
    height: "8",
    border: "1px solid lightgrey",
    borderRadius: "4px",
    width: "100%",
  };

  const lineStyle = (index: any) => ({
    height: "10px",
    margin: "10px",
    animation: "pulse 1s infinite ease-in-out",
    backgroundColor: "rgba(165, 165, 165, 0.1)",
    width: (function () {
      switch (index % 10) {
        case 0:
        case 4:
        case 8:
          return "150px";
        case 1:
        case 5:
        case 9:
          return "250px";
        case 2:
        case 6:
          return "50px";
        case 3:
        case 7:
          return "100px";
        default:
          return "auto";
      }
    })(),
  });

  const pulseKeyframes = `
    @keyframes pulse {
      0% {
        background-color: rgba(165, 165, 165, 0.1);
      }
      50% {
        background-color: rgba(165, 165, 165, 0.3);
      }
      100% {
        background-color: rgba(165, 165, 165, 0.1);
      }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{pulseKeyframes}</style>
      {Array(numberLines)
        .fill(0)
        .map((_, index) => (
          <div key={index} style={lineStyle(index)} />
        ))}
    </div>
  );
};

export default TextInputLoading;
