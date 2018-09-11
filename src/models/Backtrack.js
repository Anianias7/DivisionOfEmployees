export default class Backtrack {
    constructor(graph) {
        this.graph = graph;
        this.level = 0;
    }


    backtracking = (vertexNum) => {
        const graph = this.graph;
        if (graph.isFulfilled() || vertexNum >= graph.listOfVertices.length) {
                return graph;
        } else {
            this.level++;
            console.log(vertexNum);
            console.log("level: ", this.level)
            const vertex = graph.listOfVertices[vertexNum];
            const vertexesDomain = vertex.variable.domain;
            for (let i = 0; i < vertexesDomain.length; i++) {
                vertex.variable.value = vertexesDomain[i];
                if (graph.check(vertex)) {
                    console.log("spełnia BITCH")
                    const result= this.backtracking(vertexNum + 1);
                    this.level--;
                    console.log("level: ", this.level);
                    if(result) {
                        return result;
                    }
                }
                vertex.variable.value = null
            }

        }
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

    // backtracking = (graphNumber) => {
    //     if (graphNumber >= this.listOfGraphs.length)
    //         return [];
    //     else {
    //         const resultGraph = this.verticesBacktrack(0, this.listOfGraphs[graphNumber]);
    //         if (resultGraph) {
    //             return [resultGraph, ...this.backtracking(graphNumber + 1)];
    //         }
    //     }
    // };
}