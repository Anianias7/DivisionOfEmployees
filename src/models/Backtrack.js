export default class Backtrack {
    constructor(graph) {
        this.graph = graph;
    }

    baseCase = (vertexNum) => this.graph.isFulfilled() || vertexNum >= this.graph.listOfVertices.length

    backtracking = (vertexNum) => {
        const graph = this.graph;
        if (this.baseCase(vertexNum)) {
            return graph;
        } else {
            const vertex = graph.listOfVertices[vertexNum];
            const vertexesDomain = vertex.variable.domain;
            for (let i = 0; i < vertexesDomain.length; i++) {
                vertex.variable.value = vertexesDomain[i];
                if (graph.check(vertex)) {
                    const domains = this.saveDomains(vertexNum);
                    this.reduceDomains(vertexNum);
                    const result = this.backtracking(vertexNum + 1);
                    this.restoreDomains(domains, vertexNum);
                    if (result) {
                        return result;
                    }
                }
                vertex.variable.value = null
            }
        }
    }
    ;

    filterVertexDomain = (vertex) => vertex.variable.domain.filter(val => {
        const temp = vertex.variable.value;
        vertex.variable.value = val;
        const result = this.graph.check(vertex);
        vertex.variable.value = temp;
        return result;
    });

    saveDomains = (vertexNum) => this.graph.listOfVertices.slice(vertexNum + 1).map(vertex => [...vertex.variable.domain]);

    reduceDomains = (vertexNum) => this.graph.listOfVertices.slice(vertexNum + 1).forEach(v => v.variable.domain = this.filterVertexDomain(v));

    restoreDomains = (domains, vertexNum) => this.graph.listOfVertices.slice(vertexNum + 1).forEach((vertex, i) => vertex.variable.domain = domains[i]);
}