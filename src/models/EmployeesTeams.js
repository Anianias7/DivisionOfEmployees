import Constraint from './Constraint'
import Employee from "./Employees";
import Vertex from "./Vertex";
import Graph from "./Graph";
import Backtrack from './Backtrack'

import employeesData from '../data/employees'
import checkConstraints from './constraintFunction'

const TEAM_SIZE = 2;
const NUMBER_OF_EMPLOYEES = employeesData.length;

const constraint = new Constraint(checkConstraints);


const listOfVertices = Array.from({length: NUMBER_OF_EMPLOYEES}, (_, k) => k).map(i => new Vertex(i,
    new Employee(employeesData).employee));
//MUTUJE??????
// console.log("PRZED", listOfVertices)
// listOfVertices[1].variable.value = "cos";
// console.log("PO", listOfVertices)

const graph = new Graph(listOfVertices, constraint, Math.floor(NUMBER_OF_EMPLOYEES/TEAM_SIZE), TEAM_SIZE);

console.log("LISTA SĄSIEDZTWA", graph.vertexAdjacencyList(0));
//
const backtrack = new Backtrack(graph);
const result = backtrack.backtracking(0);
console.log("WYNIK", result);

export default result;







