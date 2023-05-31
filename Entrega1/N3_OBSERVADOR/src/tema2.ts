import * as events from 'events';
const eventEmitter = new events.EventEmitter();

export class Animal {
    subscriptors: Function[];
    constructor() {
        this.subscriptors = [];
    };

    addSubscribe (sub: Function) {
        this.subscriptors.push(sub);
    };

    unSuscribe(sub: Function) {
        this.subscriptors = this.subscriptors.filter((item) => item !== sub);
    };

    notify(event: string) {
        this.subscriptors.forEach((item) => {
            item.call(this, event);
        });
    };
};

class User extends Animal {
    public name: string;

    constructor(name: string,issue: string) {
        super();
        this.name = name;

        console.log(`Esta semana hablaremos de: ${issue}`);
    }
};

const animal = new Animal();

function user1 (issue: string) {
    const user =  new User('Alejandro', issue);
} 

function user2 (issue: string) {
    const user =  new User('Juan', issue);
} 

animal.addSubscribe(user1);
animal.addSubscribe(user2);

eventEmitter.on('event', (issue) => {
    animal.notify(issue);
});

eventEmitter.emit('event','Reptiles');
eventEmitter.emit('event','Insectos');

