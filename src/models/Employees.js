import Variable from './Variable';

class Employees {

    constructor(employeesData) {
        this.employeesData = employeesData;
        this.employeesVariable = this.initVariableWithEmployeeDomain();
    }

    addCityWithDistrictToEmployee = employee => ({
        ...employee,
        cityWithDistrict: `${employee.city} ${employee.district}`
    });

    initVariableWithEmployeeDomain = () =>
            new Variable(null, this.employeesData.map(this.addCityWithDistrictToEmployee));
}

export default Employees;

