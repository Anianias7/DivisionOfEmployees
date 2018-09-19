import {hasDifferentValuesOnProp, hasLessThanTwoTrueValueOnProp, all} from '../models/constraintFunction'
import Vertex from "../models/Vertex";
import Variable from "../models/Variable";

describe('different values on prop', () => {
    const prop = "age";
    const me = new Vertex(0, new Variable({
            name: "Ania",
            age: "5"
        }, null)
    );
    test('different values should return true', () => {
        const others = [
            new Vertex(1, new Variable({
                name: "Asia",
                age: "7"
            }, null)),
            new Vertex(2, new Variable({
                name: "Zosia",
                age: "3"
            }, null)),

        ];
        expect(hasDifferentValuesOnProp(prop)({me, others})).toBe(true);
    });

    test('not different values should return false', () => {
        const others = [
            new Vertex(1, new Variable({
                name: "Asia",
                age: "5"
            }, null)),
            new Vertex(2, new Variable({
                name: "Zosia",
                age: "3"
            }, null)),

        ];
        expect(hasDifferentValuesOnProp(prop)({me, others})).toBe(false);
    });
    test('different values with null values should return true', () => {
        const others = [
            new Vertex(1, new Variable({
                name: "Asia",
                age: "7"
            }, null)),
            new Vertex(2, new Variable(null, null)),
        ];
        expect(hasDifferentValuesOnProp(prop)({me, others})).toBe(true);
    });

    test('no different values with null values should return false', () => {
        const others = [
            new Vertex(1, new Variable({
                name: "Asia",
                age: "5"
            }, null)),
            new Vertex(2, new Variable(null, null)),

        ];
        expect(hasDifferentValuesOnProp(prop)({me, others})).toBe(false);
    });
});


describe('Two true values on prop', () => {
    const prop = "defectOfVision";

    const me = new Vertex(0, new Variable({
            name: "Ania",
            age: "5",
            defectOfVision: "true"
        }, null)
    );

    test('less than two true values should return true', () => {
        const others = [
            new Vertex(1, new Variable({
                name: "Asia",
                age: "7",
                defectOfVision: "false"
            }, null)),
            new Vertex(2, new Variable({
                name: "Zosia",
                age: "3",
                defectOfVision: "false"
            }, null)),
        ];
        expect(hasLessThanTwoTrueValueOnProp(prop)({me, others})).toBe(true);
    });

    test('more than two true values should return false', () => {
        const others = [
            new Vertex(1, new Variable({
                name: "Asia",
                age: "7",
                defectOfVision: "true"
            }, null)),
            new Vertex(2, new Variable({
                name: "Zosia",
                age: "3",
                defectOfVision: "false"
            }, null)),
        ];
        expect(hasLessThanTwoTrueValueOnProp(prop)({me, others})).toBe(false);
    });

    test('less than two true values with null values should return true', () => {
        const others = [
            new Vertex(1, new Variable({
                name: "Asia",
                age: "7",
                defectOfVision: "false"
            }, null)),
            new Vertex(2, new Variable(null, null)),
        ];
        expect(hasLessThanTwoTrueValueOnProp(prop)({me, others})).toBe(true);
    });

    test('more than two true values with null values should return false', () => {
        const others = [
            new Vertex(1, new Variable({
                name: "Asia",
                age: "7",
                defectOfVision: "true"
            }, null)),
            new Vertex(2, new Variable(null, null)),
        ];
        expect(hasLessThanTwoTrueValueOnProp(prop)({me, others})).toBe(false);
    });
});

describe("compositions of predicates", () => {
    const typeOf = val => typeof val === "number";
    const isThree = val => val === 3;

    const three = 3;
    const four = 4;

    test("if every function in composition return true should returns true", () => {
        expect(all(typeOf, isThree)(three)).toBe(true);
    });

    test("if not every function in composition return true should returns false", () => {
        expect(all(typeOf, isThree)(four)).toBe(false);
    })
});




