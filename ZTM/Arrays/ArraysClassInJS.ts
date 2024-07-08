class Player {
  name: string;
  type: string;

  constructor(name: string, type: string) {
    console.log("Player", name);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}
