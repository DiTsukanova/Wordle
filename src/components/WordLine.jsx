import React from "react";

const WordLine = ({ word, index2 }) => {
  console.log(word, "WORD");
  return (
    <div className="line">
      {word.map(({ key, color }) => {
        return (
          <div
            style={{
              backgroundColor: color,
            }}
          >
            {key}
          </div>
        );
      })}
    </div>
  );
};

export default WordLine;

//words = [[{key: k, color: 'grey}, {}, {}], [], []]
//word = [{key: k, color: 'grey}, {}, {}]
