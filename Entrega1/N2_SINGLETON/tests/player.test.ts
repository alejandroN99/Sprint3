import { Player } from "../src/player";

describe('class Player', () => {
    test('test constructor class Player', () => {
        const player1 = new Player('Alejandro', 24);

        const result = player1;

        expect(result.name).toBe('Alejandro');
        expect(result.age).toBe(24);
        expect(result.points).toBe(0);
    });

    test("test method getPlayer", () => {
        const player1 = new Player('Alejandro', 24);
        const result = player1.getPlayer();

        expect(result).toBe('Alejandro, 24 years old and have 0 points');
    });
})