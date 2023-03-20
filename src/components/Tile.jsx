import React from "react";
import "../App.css";
import EmptyLine from "./EmptyLine";
import LineInput from "./LineInput";
import WordLine from "./WordLine";

export const Tile = ({ words, currentAttempt }) => {
  //   console.log(colorLetter, "COLORLETTERTILE");

  console.log(words, "WORDS!!!!!!!!!");
  return (
    <div>
      {words.map((word, index) => {
        return <WordLine word={word} index2={index} />;
      })}
      {words.length <= 5 && (
        <div>
          <LineInput word={currentAttempt} />
        </div>
      )}
      {words.length <= 5 &&
        Array(5 - words.length)
          .fill()
          .map(() => {
            return <div className="line">{Array(5).fill(<EmptyLine />)}</div>;
          })}
    </div>
  );
};
