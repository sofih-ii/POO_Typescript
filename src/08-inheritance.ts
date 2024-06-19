export class Animal {
    constructor(public name: string){

    }

    move(){
        console.log('Moving along!');
    }

    greeting(){
        return `Hello, I'm ${this.name}`
    }
}

export class Dog extends Animal{

    constructor(name: string, public owner: string) {
        super(name);
    }
    woof(times: number): void{
        for(let index = 0; index < times; index++){
            console.log('woof');
        }
    }
}

const milo = new Animal('milo');
milo.move();
console.log(milo.greeting());

const bruno = new Dog('bruno', 'kiki');
bruno.move();
console.log(bruno.greeting());
bruno.woof(5)

console.log(bruno.owner);