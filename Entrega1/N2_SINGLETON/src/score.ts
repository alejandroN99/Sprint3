class Score {
    static instance: Score;
    constructor(){
        if(!!Score.instance){
            return Score.instance;
        }
    
        Score.instance = this;
    }

    showWinner(players: Array<Player>){
        const winner = players.reduce((anterior, actual) => {
            return (anterior.points > actual.points) ? anterior : actual;
        });

        console.log(`WINNER: El ganador es ${winner.name} con ${winner.points} puntos.`);
        console.log(`${winner.getPlayer()}`);
    }
    
}

import {Player} from "./player";
export {Score};