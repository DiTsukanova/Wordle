import { useReducer } from "react";

import logo from "./logo.svg";
import "./App.css";
import { Tile } from "./components/Tile";
import { Keyboard } from "./components/Keyboard";
import { useState } from "react";
import { stringWords } from "./data/dataWords";
import { useEffect } from "react";
import { colorKeyboard } from "./helpers/colorKeyboard";
const countLetter = 5;

//Уметь писать писать редьюсеры, которые работают с объктами и массивами

const dataWords = stringWords.split("\n");

const initialState = {
  words: [],
  currentAttempt: "",
};

function reducer(state, action) {
  if (action.type === "ADD_LETTER") {
    return {
      ...state,
      currentAttempt:
        state.currentAttempt.length === countLetter
          ? state.currentAttempt
          : state.currentAttempt + action.letter,
    };
  }
  if (action.type === "REMOVE_LETTER") {
    console.log("REMOVE_LETTERx");
    return {
      ...state,
      currentAttempt: state.currentAttempt.slice(0, -1),
    };
  }
  if (action.type === "ADD_WORD") {
    return {
      ...state,
      words: [...state.words, state.currentAttempt],
      currentAttempt: "",
    };
  }
}

function addColorLetter(hiddenWord, currentAttempt) {
  let solution = hiddenWord.split("");
  let attempt = currentAttempt.split("").map((symbol) => {
    return { key: symbol, color: "gray" };
  });

  attempt.forEach((symbolObj, index) => {
    if (solution[index] === symbolObj.key) {
      attempt[index].color = "green";
      solution[index] = "-";
    }
  });

  attempt.forEach((symbolObj, index) => {
    if (solution.includes(symbolObj.key) && symbolObj.color !== "green") {
      attempt[index].color = "yellow";
      solution[solution[symbolObj.key]] = "-";
    }
  });
  return attempt;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const [hiddenWord, setHiddenWord] = useState("power");
  const [kb, setKb] = useState(true);

  function onBackspacePress() {
    dispatch({ type: "REMOVE_LETTER" });
  }

  function handleLetterPress(letter) {
    dispatch({ type: "ADD_LETTER", letter });
    // setWords((prev) => [...prev, letter]);
    // console.log(words); - почему при первом нажатии на букву будет пустой массив? Дело в замыкании
  }

  //apple
  //power

  function onEnterPress() {
    dispatch({ type: "ADD_WORD" });
    // if (state.currentAttempt === hiddenWord) {
    //   colorLetter.push(addColorLetter(hiddenWord, state.currentAttempt));
    //   console.log("Вы выйграли!");
    // } else if (state.currentAttempt.length === countLetter) {
    //   dispatch({ type: "ADD_WORD" });
    //   colorLetter.push(addColorLetter(hiddenWord, state.currentAttempt));
    // }
  }

  const colorLetter = state.words.map((word) => {
    return addColorLetter(hiddenWord, word);
  });

  const objColorsLetter = colorKeyboard(colorLetter);

  return (
    <div className="App">
      <h1>Wordle</h1>
      <Tile words={colorLetter} currentAttempt={state.currentAttempt} />
      <button onClick={() => setKb((p) => !p)}>keyboard</button>
      {kb && (
        <Keyboard
          onLetterPress={handleLetterPress}
          onEnterPress={onEnterPress}
          onBackspacePress={onBackspacePress}
          colorsLetters={objColorsLetter}
        />
      )}
    </div>
  );
}

export default App;
