import { Score } from "../src/score";
import { Player } from "../src/player";
import { Game } from "../src/game";

describe("class Score", () => {
    test('test class Score instance once', () => {
        const score1 = new Score();
        const score2 = new Score();

        expect(score1).toBe(score2);
    });

    test('You must display the winner correctly', () => {

        const players = [
          new Player('Jugador 1', 10),
          new Player('Jugador 2', 15),
          new Player('Jugador 3', 5),
        ];

        const score1 = new Score();
        const game = new Game();

        game.addPoints('Jugador 2', 100);
    
        const mockConsoleLog = jest.spyOn(console, 'log');
        mockConsoleLog.mockImplementation(() => {}); // Suprimir la salida en la consola
    
        score1.showWinner(players);
    
        expect(mockConsoleLog).toHaveBeenCalledWith(
          expect.stringContaining('ganador es')
        );
        expect(mockConsoleLog).toHaveBeenCalledTimes(2);
    });
    
})