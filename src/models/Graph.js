class Graph {
    constructor(vertices, constraints) {
        this.constraints = constraints;
        this.listOfVertices = vertices;
    }

    filterVerticesList = (vertex) => this.listOfVertices.filter(v => v.id !== vertex.id);

    check = (vertex) => this.constraints.check({me: vertex, others: this.filterVerticesList(vertex)});

    isFulfilled = () => this.listOfVertices.every(vertex => vertex.variable.value !== null)
}

export default Graph;