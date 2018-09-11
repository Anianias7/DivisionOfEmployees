import Variable from './Variable';

class Employee {

    constructor(employeesData) {
        this.employeesData = employeesData;
        this.employee = this.createEmployee();
    }

    createEmployee = () =>
            new Variable(null, this.employeesData.map(employee => ({
                ...employee,
                cityWithDistrict: `${employee.city} ${employee.district}`
            })));
}

export default Employee;

