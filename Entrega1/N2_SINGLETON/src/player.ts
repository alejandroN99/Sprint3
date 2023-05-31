class Player {
    public name: string;
    public age: number;
    public points: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.points = 0;
    }

    public getPlayer(): string {
        return `${this.name}, ${this.age} years old and have ${this.points} points`;
    }
}

export {Player};    