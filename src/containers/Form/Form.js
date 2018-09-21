import React, {Component} from 'react'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import NewEmployeeSection from "../../components/Form/FormSection/NewEmployeeSection/NewEmployeeSection";
import Button from "../../components/UI/Button/Button";

import ValidatorService from '../../validators.service'
import * as actionTypes from '../../store/actions'

const createInitialState = (fields) => {
    return fields.reduce((acc, {name, required, initialValue}) => {
        return {
            ...acc,
            [name]: {
                value: initialValue !== undefined ? initialValue : '',
                touched: false,
                valid: !required,
                errors: []
            }
        }
    }, {})
};

class Form extends Component {

    state = {
        ...createInitialState(this.props.fields),
    };

    checkedIfError = (field) => {
        return field.touched && !field.valid;
    };

    requiredMessages = (fieldName, fieldValue, required) => {
        let requiredMessage = [];
        if (required) {
            requiredMessage = ValidatorService.required(fieldValue, fieldName);
        }
        return requiredMessage;
    };

    validatorsMessages = (validatorsList, fieldValue) => {
        let msgs = [];
        if (validatorsList) {
            msgs = validatorsList.reduce((messages, validator) => {
                return messages.concat(validator(fieldValue) || []);
            }, []);
        }
        return msgs;
    };

    isFieldValid = (requiredMsg, errors) =>
        (requiredMsg === undefined || requiredMsg.length === 0) && errors.length === 0;


    handleNumberInput = ({event: {target: {value, name}}}) => {

        const numRegExp = /^\d+\.?\d*$/g;
        const val = numRegExp.test(value) ? value : "";
        this.handleChangeValue({
            value: val,
            name,
            valid: true
        })
    };

    handleCheckBox = ({
                          event: {target: {name, checked}}
                      }
    ) => {
        this.handleChangeValue({
            name,
            value: checked.toString(),
            valid: true
        })
    };

    handleInput = ({
                       event: {target: {value, name}},
                       required,
                       validators
                   }
    ) => {
        const requiredMsg = this.requiredMessages(name, value, required);
        const errors = validators ? this.validatorsMessages(validators, value) : [];
        this.handleChangeValue({
            name,
            value,
            valid: this.isFieldValid(requiredMsg, errors),
            errors
        })
    };

    handleChangeValue = ({
                             name,
                             value,
                             valid,
                             errors,
                         }) => {
        this.setState(
            {
                [name]: {
                    ...this.state[name],
                    valid,
                    value,
                    errors
                }
            },
        );
    };

    isFormValid = (state) =>
        this.props.fields.reduce((isValid, {name}) => {
            return state[name].valid && isValid
        }, true);

    changeTouchedValueAfterSubmit = () => {
        const state = this.state;
        const fieldsInfo = this.props.fields.reduce((fieldInfo, {name}) => {
            return {
                ...fieldInfo,
                [name]: {
                    ...state[name],
                    touched: true
                }
            }
        }, {});
        this.setState({
            ...fieldsInfo
        })
    };

    createDataFormatAfterSubmit = () => {
        const state = this.state;
        return Object.keys(state).reduce((obj, key) => ({
            ...obj,
            [key]: state[key].value
        }), {});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const state = this.state;
        if (this.isFormValid(state)) {
            const newEmployee = {
                ...this.createDataFormatAfterSubmit(),
                id: (this.props.employees.length).toString()
            };
            this.props.onEmployeeAdded(newEmployee);
            this.props.history.push('/');
        }

        else {
            console.log("Something went wrong!");
        }

        this.changeTouchedValueAfterSubmit();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <NewEmployeeSection
                    numberOfTeams={this.props.numberOfTeams}
                    getInput={this.handleInput}
                    getCheckbox={this.handleCheckBox}
                    getNumberInput={this.handleNumberInput}
                    values={this.state}
                    getErrors={this.checkedIfError}
                />
                <Button text="DODAJ PRACOWNIKA"
                        type='submit'/>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        employees: state.employees
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onEmployeeAdded: (employee) => dispatch({
            type: actionTypes.ADD_EMPLOYEE,
            employee: employee
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Form));