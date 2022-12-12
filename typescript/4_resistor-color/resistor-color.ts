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

export const colorCode = (color: string) => {
  const hasColorParams = color.trim().length > 0;

  if (hasColorParams) {
    const formattedColor = color.trim().toLowerCase();

    const returnCode = colorsArr.indexOf(formattedColor);
    return returnCode;
  } else {
    return "You must insert at least 1 valid color";
  }
};

export const COLORS = colorsArr;
