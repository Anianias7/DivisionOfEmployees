export default class Backtrack {
    constructor(listOfGraphs) {
        this.listOfGraphs = listOfGraphs;
    }

    // verticesBacktrack = (vertexNum, graph, _domains) => {
    //     if (graph.isFulfilled()) {
    //         return graph;
    //     } else {
    //         const vertex = graph.listOfVertices[vertexNum];
    //         const domains = _domains;
    //         for (let i = 0; i < domains[vertexNum].length; i++) {
    //             const chosenVariable = domains[i];
    //             vertex.variable.value = chosenVariable;
    //             const reducedDomains = this.reduceDomains(chosenVariable, graph);
    //             if (reducedDomains && graph.check(vertex)) {
    //                 // console.log(graph.listOfVertices.map(vertex => vertex.variable.domain));
    //                 // console.log("spełnione dla grafu: ", graph, "Wierzchołek: ", vertex);
    //                 const result = this.verticesBacktrack(vertexNum + 1, graph, reducedDomains);
    //                 if (result) {
    //                     return result;
    //                 }
    //             }
    //         }
    //     }
    // };

    // verticesBacktrack = (vertexNum, graph) => {
    //     if (graph.isFulfilled()) {
    //         return graph;
    //     } else {
    //         const vertex = graph.listOfVertices[vertexNum];
    //         for (let i = 0; i < vertex.variable.domain.length; i++) {
    //             vertex.variable.value = vertex.variable.domain[i];
    //             this.reduceDomains(vertex.variable, graph);
    //             if (graph.check(vertex)) {
    //                 const result = this.verticesBacktrack(vertexNum + 1, graph);
    //                 if (result) {
    //                     return;
    //                 }
    //             }
    //         }
    //     }
    // };

    backtracking = (graphNumber) => {
        if (graphNumber >= this.listOfGraphs.length)
            return [];
        else {
            const resultGraph = this.verticesBacktrack(0, this.listOfGraphs[graphNumber]);
            if (resultGraph) {
                return [resultGraph, ...this.backtracking(graphNumber + 1)];
            }
        }
    };
}