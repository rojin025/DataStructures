class Player {
  name: string;
  type: string;

  constructor(name: string, type: string) {
    console.log("Player", this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, and my Type is ${this.type}`);
  }
}

class Wizard extends Player {
  name: string;
  type: string;

  constructor(name: string, type: string) {
    super(name, type);
    console.log("wizard: ", this);
  }
  play() {
    console.log("We are playing the game, ", this.type);
  }
}

const wizard = new Wizard("John", "Healer");
wizard.introduce();
wizard.play();
