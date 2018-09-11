

class Vertex {
    constructor(vertexId, variable) {
        this.id = vertexId;
        this.variable = variable;
    }

    setVariable(variable) {
       this.variable = variable;
    }

    getVariable() {
        return this.variable;
    }
}

export default Vertex;