import TNine from "./TNine";
import Naive from "../Naive";
import WordDeterminationInterface from "./WordDetermination.interface";
import Button from "../../models/Button";

describe('smoke test', () => {
    it('should create instance', () => {
        const instance = new TNine();

        expect(instance).not.toBeNull();
    });
})

describe('assertion test', () => {
    let instance: TNine;

    beforeEach(() => {
        instance = new TNine();
    })

    it('should have default Algorithm', () => {

        expect(instance['algorithm']).toBeInstanceOf(Naive);
    });

    it('should set Algorithm', () => {

        class MyAl implements WordDeterminationInterface {
            compute(): string[] {
                return [];
            }
        }
        instance.setAlgorithm(new MyAl);

        expect(instance['algorithm']).toBeInstanceOf(MyAl);
    });
    it('should set Algorithm', () => {

        const mockCompute = jest.fn();
        class MyAl implements WordDeterminationInterface {
            compute(): string[] {
                return [];
            }
        }

        const button = new Button(3, 'ghe');

        const myAlInstance = new MyAl();
        myAlInstance.compute = mockCompute;

        instance.setAlgorithm(myAlInstance);
        instance.executeAlgorithm([button]);


        expect(mockCompute).toHaveBeenCalled();
    });
})