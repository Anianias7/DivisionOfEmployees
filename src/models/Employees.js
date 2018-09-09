import Variable from './Variable';

class Employees {

    constructor(employeesData) {
        this.employeesData = employeesData;
        this.employeeVariablesList = this.createVariables();
    }

    createVariables = () =>
        this.employeesData.map(() =>
            new Variable(null, null));
}

// this.employeesData.map(employee => ({
//     ...employee,
//     cityWithDistrict: `${employee.city} ${employee.district}`
// })

export default Employees;

