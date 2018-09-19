import Constraint from './Constraint'
import Employees from "./Employees";
import Vertex from "./Vertex";
import Graph from "./Graph";
import Backtrack from './Backtrack'

import checkConstraints from './constraintFunction'
import config from '../data/config'

class EmployeesTeams {
    constructor(employeesData) {
        this.employeesData = employeesData;
        this.numberOfEmployees = employeesData.length;
    }

    initListOfVertices = () => Array.from({length: this.numberOfEmployees}, (_, k) => k).map(i => new Vertex(i,
        new Employees(this.employeesData).employeesVariable));

    createGraph = (listOfVertices, constraint) => new Graph(listOfVertices, constraint, config.TEAM_SIZE);

    createEmployeesGraph = () => {
        const constraint = new Constraint(checkConstraints);
        const listOfVertices = this.initListOfVertices();
        const graph = this.createGraph(listOfVertices, constraint);
        const backtrack = new Backtrack(graph);
        return backtrack.backtracking(0);
    }
}

export default EmployeesTeams;