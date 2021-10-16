import Character from './Character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.datura = false;
    this.distance = 1;
  }

  get stoned() {
    return this.datura;
  }

  set stoned(value) {
    this.datura = value;
  }

  get attack() {
    let totalDamagePower = this.coefDamagePower * (1 - (this.distance - 1) / 10);
    if (this.stoned) {
      totalDamagePower -= Math.log2(this.distance) * 5;
    }
    if (totalDamagePower > 0) {
      return Math.floor(totalDamagePower);
    }
    return 0;
  }

  set attack(value) {
    this.coefDamagePower = value;
  }
}
