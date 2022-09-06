"use strict";

function randomBackground() {
  // !SHOULD : sets the backgroundto a randomcolor
  //   *receives no parameters
  //   *Calls randomColor to get an rgb object
  //   const rgb = randomColor();
  //   *Calls rgbToCSS with that object
  //   const rbgString = rgbToCss(rgb);

  const rbgString = rgbToCss(randomColor());

  //   *Usesthe return value as value for body.style.backgroundColor, thus setting the background color to a randomvalue
  const HTML = document.querySelector("html");
  HTML.style.backgroundColor = rbgString;
}

function randomColor() {
  // !SHOULD : returns a random rgb color object
  //   *Creates three values, r, g, and b, as random(integers) between 0 and 255.
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  //   *Returns those as an object
  return { r, g, b };
}

function rgbToCss(rgb) {
  // !SHOULD : converts a rgbcolorobjectintoa CSS colorstring
  //   *receives an rgb object, with values for r, g, and b, e.g. {r: 192, g: 5, b: 42}
  //   *Creates a string like "rgb( 192, 5, 42  )" with the r, g, and b numbers
  let rgbString = `rgb(${rgb.r} ${rgb.g} ${rgb.b})`;
  console.log(rgbString);
  //   *Returns that string
  return rgbString;
}

randomBackground();
