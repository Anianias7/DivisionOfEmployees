import Constraint from './Constraint'
import Employee from "./Employees";
import Vertex from "./Vertex";
import Graph from "./Graph";
import Backtrack from './Backtrack'

import employeesData from '../createEmployeesData'
import checkConstraints from './constraintFunction'

const TEAM_SIZE = 2;
const NUMBER_OF_EMPLOYEES = employeesData.length;

const constraint = new Constraint(checkConstraints);

const listOfVertices = Array.from({length: NUMBER_OF_EMPLOYEES}, (_, k) => k).map(i => new Vertex(i,
    new Employee(employeesData).employee));

const graph = new Graph(listOfVertices, constraint, Math.floor(NUMBER_OF_EMPLOYEES/TEAM_SIZE), TEAM_SIZE);

const backtrack = new Backtrack(graph);

export default () => backtrack.backtracking(0);