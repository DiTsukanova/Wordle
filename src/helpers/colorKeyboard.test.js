import { colorKeyboard } from "./colorKeyboard";


test("colorKeyboard #1", () => {
  const input = [[
    {
      key: "a",
      color: "yellow",
    },
    {
      key: "b",
      color: "green",
    },
    {
      key: "c",
      color: "gray",
    },
    {
      key: "a",
      color: "gray",
    },
    {
      key: "b",
      color: "gray",
    },
  ]];


  const obj = colorKeyboard(input);

  expect(obj).toEqual({
    a: "yellow",
    b: "green",
    c: "gray",
  });
})


test("colorKeyboard ooooo", () => {
      const input = [[
    {
      key: "o",
      color: "gray",
    },
    {
      key: "o",
      color: "green",
    },
    {
      key: "o",
      color: "gray",
    },
    {
      key: "o",
      color: "gray",
    },
    {
      key: "o",
      color: "gray",
    },
  ]];


  const obj = colorKeyboard(input);

    expect(obj).toEqual({
    o: "green",
  });
})

