class Constraint {

    constructor(checkFunction) {
        this.checkFunction = checkFunction;
    }

    check = (meAndOthers) => this.checkFunction(meAndOthers);
}

export default Constraint;