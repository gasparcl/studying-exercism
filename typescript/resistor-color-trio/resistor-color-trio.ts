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

export function decodedResistorValue(selectedColors: string[]) {
  const hasParams = selectedColors.length >= 3;

  if (hasParams) {
    const formattedColorsArr = selectedColors.map((e) =>
      e.toLowerCase().trim()
    );
    const firstColorIdx = colorsArr.indexOf(formattedColorsArr[0]);
    const secondColorIdx = colorsArr.indexOf(formattedColorsArr[1]);
    const thirdIdx = colorsArr.indexOf(formattedColorsArr[2]);
    const exponent =
      secondColorIdx === 0 ? 10 ** (thirdIdx + 1) : 10 ** thirdIdx;

    const returnNumber =
      Number(`${firstColorIdx}${secondColorIdx === 0 ? "" : secondColorIdx}`) *
      exponent;

    const finalResistance = `${returnNumber} ${
      returnNumber > 1 ? "ohms" : "ohm"
    }`;

    if (returnNumber >= 0) return finalResistance;
    else return "ERROR: You wrote any invalid color";
  } else {
    return "ERROR: You need to insert three colors inside an array.";
  }
}
