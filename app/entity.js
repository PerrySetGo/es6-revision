class Entity {
  constructor(name, height){
    this.name = name;
    this.height = height;
  }

  greet(){
    console.log(`Hi, I'm ${this.name}`);
  }
}


export default Entity;
