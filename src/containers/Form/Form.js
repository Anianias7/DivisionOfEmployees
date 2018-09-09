import React, {Component} from 'react'
import NewEmployeeSection from "../../components/FormSection/NewEmployeeSection/NewEmployeeSection";
import SubmitButton from "../../components/FormSection/SubmitButton/SubmitButton";
import ValidatorService from '../../validators.service'
// import utils from '../../utils'


const createInitialState = (fields) => {
    return fields.reduce((acc, {name, required}) => {
        return {
            ...acc,
            [name]: {
                value: '',
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

    handleSubmit = (event) => {
        event.preventDefault();
        const state = this.state;

        if (this.isFormValid(state)) {
            // console.log(this.createDataFormatAfterSubmit());
            this.props.validForm()
        }
        else {
           console.log("Something went wrong!")
        }
        this.changeTouchedValueAfterSubmit();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <NewEmployeeSection
                    numberOfTeams={this.props.numberOfTeams}
                    getInput={this.handleInput}
                    getNumberInput={this.handleNumberInput}
                    values={this.state}
                    getErrors={this.checkedIfError}
                />
                <SubmitButton/>
            </form>
        );
    }
}

export default Form;