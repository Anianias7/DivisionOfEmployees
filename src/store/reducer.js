import generateRandomEmployees from '../createEmployeesData'
import config from '../data/config'
import * as actionTypes from './actions'

const initialState = {
    employees: generateRandomEmployees(config.NUMBER_OF_EMPLOYEES)
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.employee]
            };
        default:
            return state;
    }
};

export default reducer;