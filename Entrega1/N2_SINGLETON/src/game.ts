import {Player} from "./player";
import {Score} from "./score";

export class Game {
    public players: Array<Player>;
    public score: Score;

    constructor () {
        this.players = [];
        this.score = new Score();
    }
    
    addPlayer(name: string,age: number){
        const player = new Player(name,age);
        this.players.push(player);
        
    }

    addPoints(name : string,points: number){
        const player = this.players.find(p => p.name === name);
        if(player) player.points += points;
    }
    
    substractPoints(name: string,points: number){
        const player  = this.players.find(p => p.name === name);
        if(player) player.points -= points;
        //if(player.points < 0) player.points = 0;
    }
    
    showScore(){
        console.log("Marcador:");
        for(let i = 0; i < this.players.length; i++){
            console.log(this.players[i]);
        }
        this.score.showWinner(this.players);
    }
}


