import { Game } from "./game";
import {Player} from "./player";
import {Score} from "./score";

const Game1 = new Game();

const player1 = Game1.addPlayer('Alejandro', 24);
const player2 = Game1.addPlayer('Jordi', 45);
const player3 = Game1.addPlayer('Marta', 30);


Game1.addPoints('Marta',200);
Game1.addPoints('Marta',100);
Game1.addPoints('Alejandro',500);
Game1.addPoints('Alejandro',600);
Game1.addPoints('Jordi',140);
Game1.addPoints('Jordi',170);

Game1.substractPoints('Marta',220);
Game1.substractPoints('Alejandro',120);
Game1.substractPoints('Jordi',70);

Game1.showScore();
