import React from "react";

const LineInput = ({ word }) => {
  return (
    <div className="line">
      {/* {Array(5)
        .fill()
        .map((_, index) => {
          return <div>{word[index]}</div>;
        })} */}
      {word
        .padEnd(5, " ")
        .split("")
        .map((letter) => (
          <div>{letter}</div>
        ))}
    </div>
  );
};

export default LineInput;

// elem0 = word[0];
// elem1 = word[1];
// elem2 = word[2];
