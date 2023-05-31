
import { Animal } from "../src/tema2";

describe('class Animal', () => {
    test('test constructor and method addSubcriptor', () => {
        const sub1 = jest.fn();
        const sub2 = jest.fn();
        const animal = new Animal();
        animal.addSubscribe(sub1);
        animal.addSubscribe(sub2);

        const result = animal.subscriptors;
        
        expect(result.length).toBe(2);
        expect(result).toEqual([sub1, sub2]);

    });

    test('', () => {
        const sub1 = jest.fn();
        const sub2 = jest.fn();
        const animal = new Animal();
        animal.addSubscribe(sub1);
        animal.unSuscribe(sub1);

        expect(animal.subscriptors).not.toContain(sub1);
    })

    test('notify should call all subscribers with the correct event', () => {
        const sub1 = jest.fn();
        const sub2 = jest.fn();
        const animal = new Animal();
        animal.addSubscribe(sub1);
        animal.addSubscribe(sub2);

        const result = animal.notify('Reptiles');
        
        expect(sub1).toHaveBeenCalledWith('Reptiles');
        expect(sub2).toHaveBeenCalledWith('Reptiles');
    });
})