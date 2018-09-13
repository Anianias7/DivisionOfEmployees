import Constraint from './Constraint'
import Employees from "./Employees";
import Vertex from "./Vertex";
import Graph from "./Graph";
import Backtrack from './Backtrack'

import employeesData from '../createEmployeesData'
import checkConstraints from './constraintFunction'
import config from '../data/config'

const NUMBER_OF_EMPLOYEES = employeesData.length;

const constraint = new Constraint(checkConstraints);
console.log("DATA", employeesData);

const listOfVertices = Array.from({length: NUMBER_OF_EMPLOYEES}, (_, k) => k).map(i => new Vertex(i,
    new Employees(employeesData).employeesVariable));

const graph = new Graph(listOfVertices, constraint, config.TEAM_SIZE);

const backtrack = new Backtrack(graph);

export default () => backtrack.backtracking(0);


// import Constraint from './Constraint'
// import Employees from "./Employees";
// import Vertex from "./Vertex";
// import Graph from "./Graph";
// import Backtrack from './Backtrack'
//
// import employeesData from '../createEmployeesData'
// import checkConstraints from './constraintFunction'
// import TEAM_SIZE from '../data/config'
//
// const NUMBER_OF_EMPLOYEES = employeesData().length;
//
// const constraint = new Constraint(checkConstraints);
//
// const listOfVertices = Array.from({length: NUMBER_OF_EMPLOYEES}, (_, k) => k).map(i => new Vertex(i,
//     new Employees(employeesData()).employeesVariable));
//
// const graph = new Graph(listOfVertices, constraint, TEAM_SIZE);
//
// const backtrack = new Backtrack(graph);
//
// export default () => backtrack.backtracking(0);