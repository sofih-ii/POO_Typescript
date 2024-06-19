export class Animal {
    constructor(protected name: string){}

    move(){
        console.log('Moving along!');
    }

    greeting(){
        return `Hello, I'm ${this.name}`
    }

    protected doSomething(){
        console.log('dooo');
    }
}

export class Dog extends Animal{

    constructor(name: string, public owner: string) {
        super(name);
    }
    woof(times: number): void{
        for(let index = 0; index < times; index++){
            console.log(`woof ${this.name}`);
        }
        this.doSomething();
    }
    move(){
        console.log('Moving as a dog');
        super.move();
    }
}

const bruno = new Dog('bruno', 'kiki');
bruno.woof(5)
bruno.move();