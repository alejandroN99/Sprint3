
import { Sport } from "../src/tema1";

describe('tema 1: Sport', () => {
    test('test class Sport', () => {
        const sport1 = new Sport();
        function User1(issue: string) {
            console.log(`The issue of this week is: ${issue}`);
        }
        const sub1 = sport1.addSubscribe(User1);

        const result = sport1.subscriptors
        const expectedResult = [User1]

        expect(result).toEqual(expectedResult);
    });

    test('unSubscribe should remove a subscriber from the list', () => {
        const sport = new Sport();
        const subscriber = jest.fn();
        sport.addSubscribe(subscriber);
        sport.unSubscribe(subscriber);
        expect(sport.subscriptors).not.toContain(subscriber);
      });

    test('notify should call all subscribers with the correct event', () => {

        const sport = new Sport();
        const subscriber1 = jest.fn();
        const subscriber2 = jest.fn();

        sport.addSubscribe(subscriber1);
        sport.addSubscribe(subscriber2);
        sport.notify('soccer');

        expect(subscriber1).toHaveBeenCalledWith('soccer');
        expect(subscriber2).toHaveBeenCalledWith('soccer');
    });
   
})