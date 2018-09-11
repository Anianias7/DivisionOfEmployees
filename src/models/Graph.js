class Graph {
    constructor(vertices, constraints, numOfRows, numOfColumns) {
        this.constraints = constraints;
        this.listOfVertices = vertices;
        this.numOfColumns = numOfColumns;
    }

    vertexesPairNum = (vertexNum) => {
        return Math.floor(this.listOfVertices[vertexNum].id / this.numOfColumns)
    };

    vertexAdjacencyList = (vertexNum) => {
        return this.filterVertices(this.listOfVertices[vertexNum]).filter(vertex =>
        this.vertexesPairNum(vertex.id) === this.vertexesPairNum(vertexNum))};

    // createAdjacencyList = () => this.listOfVertices.map(vertex => this.vertexAdjacencyList(vertex.id));

    filterVariableOfVertices = (vertex) => this.listOfVertices.filter(v => !v.variable.value || v.variable.value.id !== vertex.variable.value.id);

    filterVertices = (vertex) => this.listOfVertices.filter(v => v.id !== vertex.id);

    check = (vertex) => {
        console.log("ME", JSON.stringify(vertex.variable.value, undefined, 2));
        console.log("OTHER", JSON.stringify(this.vertexAdjacencyList(vertex.id).map(vertex => vertex.variable.value), undefined, 2));
        console.log("Lista wierzcholkow: ", JSON.stringify(this.listOfVertices.map(v => v.variable.value), undefined, 2))
        console.log("nie ma duplikatow: ", ((this.filterVariableOfVertices(vertex).length + 1) === this.listOfVertices.length));
        return ((this.filterVariableOfVertices(vertex).length + 1) === this.listOfVertices.length)  &&
        this.constraints.check({me: vertex, others: this.vertexAdjacencyList(vertex.id)});
    };

    isFulfilled = () => this.listOfVertices.every(vertex => vertex.variable.value !== null)
}

export default Graph;