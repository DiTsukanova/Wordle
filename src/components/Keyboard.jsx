import React, { useEffect } from "react";
import { objectSymbols } from "./dataKeyboard";
import styles from "./Keyboard.module.css";

console.log(styles);

export const Keyboard = ({
  onLetterPress,
  onEnterPress,
  onBackspacePress,
  colorsLetters,
}) => {
  useEffect(() => {
    function handleKeyup(e) {
      let symbol = e.key;

      console.log("symbol", symbol);

      //Обработка кнопки Backspace
      if (symbol === "Backspace") {
        onBackspacePress();
      } else if (symbol.length === 1 && "a" <= symbol && symbol <= "z") {
        onLetterPress(symbol);
      } else if (symbol === "Enter") {
        onEnterPress();
      }
    }
    window.addEventListener("keyup", handleKeyup);
    return () => {
      window.removeEventListener("keyup", handleKeyup);
    };
  }, [onLetterPress, onEnterPress, onBackspacePress]);
  //  colorLetter[0][1].key === symbol;

  //   let arr = [
  //     { key: "k", color: "grey" },
  //     { key: "l", color: "grey" },
  //     { key: "j", color: "grey" },
  //     { key: "r", color: "yellow" },
  //     { key: "g", color: "grey" },
  //   ];

  return (
    <div className="keyboard">
      {objectSymbols.map((symbol, index) => {
        // let letter = [];
        // let color = {};
        // if (colorLetter.length !== 0)
        //   colorLetter.forEach((colorLetterWord) => {
        //     colorLetterWord.forEach((obj) => {
        //       letter.push(obj.key);
        //       if (
        //         color.hasOwnProperty(obj.key) &&
        //         (obj.key === "green" || obj.key === "yellow")
        //       ) {
        //         color = { ...color };
        //       } else {
        //         color = { ...color, [obj.key]: obj.color };
        //       }
        //     });
        //   });

        //words = [[{key: k, color: 'grey}, {}, {}], [], []]

        return (
          <div
            style={{ backgroundColor: colorsLetters[symbol.symbol] }}
            onClick={() => onLetterPress(symbol.symbol)}
          >
            {symbol.symbol}
          </div>
        );
      })}
      <button onClick={() => onEnterPress()}>ENTER</button>
      <button className={styles.backspace} onClick={() => onBackspacePress()}>
        {/* <img src={backspaceImage} /> */}
      </button>
    </div>
  );
};
