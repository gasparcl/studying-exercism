const colorsArr = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export function decodedValue(selectedColors: string[]) {
  const hasParams = selectedColors.length > 0;

  if (hasParams) {
    const isMulticolor = selectedColors.length > 1;

    if (isMulticolor) {
      const formattedColorsArr = selectedColors.map((e) =>
        e.toLowerCase().trim()
      );
      const firstColor = formattedColorsArr[0];
      const secondColor = formattedColorsArr[1];

      const returnNumber = Number(
        `${colorsArr.indexOf(firstColor)}${colorsArr.indexOf(secondColor)}`
      );

      if (returnNumber >= 0) return returnNumber;
      else return "ERROR: The color you wrote is invalid";
    } else {
      const color = selectedColors[0].toLowerCase();
      const returnNumber = Number(colorsArr.indexOf(color));
      return returnNumber;
    }
  } else {
    return "ERROR: You need to insert at least two colors inside an array.";
  }
}
