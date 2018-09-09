class Constraint {

    constructor(checkFunction) {
        this.checkFunction = checkFunction;
    }

    //Pomyśl nad czymś lepszym niż:D
    check = (meAndOthers) => this.checkFunction(meAndOthers);
}

export default Constraint;