class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key | null = null;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  public abstract openDoor(key: Key): void;

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person} has entered the house.`);
    } else {
      console.log('The door is closed.');
    }
  }
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (this.key?.getSignature() === key.getSignature()) {
      this.door = true;
      console.log('The door is now open.');
    } else {
      console.log('Invalid key. The door remains closed.');
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};