import React, {Fragment} from 'react'

import classes from './Checkbox.css'

const Checkbox = ({
                      id,
                      name,
                      labelText,
                      checked,
                      onChange
                  }) => {
    return (
        <Fragment>
            <input
                id={id}
                type='checkbox'
                name={name}
                value={id}
                onChange={(event) => onChange({event})}
            />
            <label htmlFor={id} className={classes.CheckBoxLabel}>

            </label>
        </Fragment>);
};


// class Checkbox extends Component {
//
//     state = {
//         checked: false
//     };
//
//     handleOnClick = () => {
//         this.setState({
//             checked: !this.state.checked
//         })
//     };
//
//     render() {
//
//         const checkedStyle = this.state.checked ? classes.CheckedCheckbox : null;
//         return (
//             <div onClick={this.handleOnClick}
//             className={[classes.Checkbox, checkedStyle].join(" ")}>
//             </div>
//
//         );
//     }
//     ;
// }

export default Checkbox;