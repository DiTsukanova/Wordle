export function colorKeyboard(colorLetter) {
  let objColorsLetter = {};
  for (let word of colorLetter) {
    for (let {
        key,
        color
      } of word) {
      if (!objColorsLetter.hasOwnProperty(key) || priority[objColorsLetter[key]] < priority[color]) {
        objColorsLetter[key] = color;
      }

    }
  }

  return objColorsLetter
}

let priority = {
  'gray': 0,
  'yellow': 1,
  'green': 2,
}