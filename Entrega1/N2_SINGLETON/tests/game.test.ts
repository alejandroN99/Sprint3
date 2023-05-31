import { Game } from "../src/game";
import { Player } from "../src/player"


describe("class Game", () => {

   let game: Game;

  beforeEach(() => {
    game = new Game();
  })

  test("test addPlayer", () => {
    
    const player = game.addPlayer('Jugador 1', 25)

    const result = game.players

    expect(result.length).toBe(1);
    expect(result[0]).toBeInstanceOf(Player);
    expect(result[0].name).toBe('Jugador 1');
    expect(result[0].age).toBe(25);
    expect(result[0].points).toBe(0);
  });

  test("test addPoints", () => {
    const player = game.addPlayer('Jugador 1', 25);
    const points = game.addPoints('Jugador 1', 200);
    
    const result = game.players[0].points
    const expectedResult = 200;

    expect(result).toBe(expectedResult);
  });

  test("test substractPoints", () => {
    const player = game.addPlayer('Jugador 1', 25);
    const points = game.addPoints('Jugador 1', 200);
    const substract = game.substractPoints('Jugador 1', 50);

    const result = game.players[0].points
    const expectedResult = 150;

    expect(result).toBe(expectedResult);

  })

  test("test showScore call showWinner method with game.players", () => {
    const player = game.addPlayer('Jugador 1', 25);
    const points = game.addPoints('Jugador 1', 200);
    const player2 = game.addPlayer('Jugador 2', 34);
    const points2= game.addPoints('Jugador 2', 300);

    const mockShowWinner = jest.fn();
    game.score.showWinner = mockShowWinner;

    game.showScore();

    const result = mockShowWinner;

    expect(result).toHaveBeenCalledWith(game.players);

  })
})
