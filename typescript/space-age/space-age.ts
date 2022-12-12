const earthYear = {
  seconds: 31557600,
  days: 365.25,
  year: 1.0,
};

const planetsOrbitalPeriod = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: earthYear.year,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

type PlanetNames = keyof typeof planetsOrbitalPeriod;

export function age(planet: PlanetNames, seconds: number) {
  const formattedPlanetName = planet.trim().toLowerCase();
  const isValidPlanet = formattedPlanetName.length > 0;
  const isValidSeconds = seconds > 0;
  const isValidParams = isValidPlanet && isValidSeconds;

  if (isValidParams) {
    const inputPlanetYears = seconds / earthYear.seconds;
    const realPlanetYears = inputPlanetYears / planetsOrbitalPeriod[planet];
    const formattedValue = parseFloat(realPlanetYears.toFixed(2));

    return formattedValue;
  } else {
    throw new Error("Insert a valid planet and seconds");
  }
}
