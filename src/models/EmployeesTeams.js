import Constraint from './Constraint'
import Employees from "./Employees";
import Vertex from "./Vertex";
import Graph from "./Graph";
import Backtrack from './Backtrack'

import employeesData from '../data/employees'
import checkConstraints from './constraintFunction'

const TEAM_SIZE = 2;
const NUMBER_OF_EMPLOYEES = employeesData.length;

const constraint = new Constraint(checkConstraints);


const listOfVariables = new Employees(employeesData).employeeVariablesList;


const listOfGraphs = Array.from({length: Math.floor(NUMBER_OF_EMPLOYEES / TEAM_SIZE)}, (_, graphNum) =>
    new Graph(listOfVariables.slice(graphNum * TEAM_SIZE, (graphNum + 1) * TEAM_SIZE)
        .map((v, i) => new Vertex(i,v)), constraint)
);

console.log("grafy", listOfGraphs);
const backtrack = new Backtrack(listOfGraphs);
const result = backtrack.backtracking(0);
console.log(result.map(graph => graph.listOfVertices.map(vertex => vertex.variable.value)));

export default result;







