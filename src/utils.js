const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const adjustEmployeesData = (data) => {
    return data.reduce((employeesList, employee) => employeesList.concat({
        id: employee.id,
        name: (employee.name + " " + employee.lastname)
        })
     , [])
};

const dateToHHFormat = (time, period) => {
    return period === 'am' ? time : parseInt(time.slice(0,2), 10) + 12 + time.slice(2)
};

export default {
    adjustEmployeesData,
    capitalizeFirstLetter,
    dateToHHFormat
}