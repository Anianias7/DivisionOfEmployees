import faker from 'faker'

const createEmployees = (numberOfEmployees) => {
    let employees = [];
    for (let i = 0; i < numberOfEmployees; i++) {
        employees.push({
            id: i.toString(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            age: (Math.floor(Math.random() * 60) + 20).toString(),
            city: faker.address.city(),
            district: faker.address.county(),
            teamNumber: Math.floor(Math.random() * 6).toString(),
            defectOfVision: faker.random.boolean().toString()
        })
    }
    return employees;
};

export default createEmployees;
