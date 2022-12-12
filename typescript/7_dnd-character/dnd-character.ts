export class DnDCharacter {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  hitpoints: number | undefined;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    const rollDice = () => {
      return Math.floor(Math.random() * 6) + 1;
    };

    const randomNums = [rollDice(), rollDice(), rollDice(), rollDice()];
    const minorValue = Math.min(...randomNums);
    const filteredValues = randomNums.filter((n) => n !== minorValue);
    const totalValue = filteredValues.reduce(
      (acc, current) => acc + current,
      0
    );

    return totalValue;
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
