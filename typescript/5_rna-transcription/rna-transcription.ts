const isValidNucleotides = (input: string) => {
  // matches any characters different than below A, G, C or T
  const regex = /[^AGCT]/g;
  return !input.match(regex);
};

export function toRna(nucleotides: string) {
  const formattedInput = nucleotides.trim().toUpperCase();
  const isValidInput =
    formattedInput.length > 0 && isValidNucleotides(formattedInput);

  if (isValidInput) {
    const transformedInput = formattedInput.split("");
    const transcribedRNAArr = transformedInput.map((n) => {
      switch (n) {
        case "C":
          return (n = "G");
        case "G":
          return (n = "C");
        case "A":
          return (n = "U");
        case "T":
          return (n = "A");
        default:
          break;
      }
    });

    const transcribedRNA = transcribedRNAArr.join("");
    return transcribedRNA;
  } else {
    throw new Error("Invalid input DNA.");
  }
}
