// const getProp = prop => obj => obj[prop];

const all = (...fns) => input => fns.every(fun => fun(input));

//me and others are Variable =>
const hasDifferentValuesOnProp = prop => ({ me, others }) => {
    // console.log({me, others})
    return others.every(other => (!(other.variable.value) || me.variable.value[prop] !==
        other.variable.value[prop]));
}
const hasDifferentAge = hasDifferentValuesOnProp('age');
const isNotFromSameDistrictOfACity = hasDifferentValuesOnProp('cityWithDistrict');
const isNotFromSameTeam = hasDifferentValuesOnProp('teamNumber');
const hasNoDefectOfVision = hasDifferentValuesOnProp('defectOfVision');

const checkConstraints = all(hasDifferentAge, isNotFromSameDistrictOfACity, isNotFromSameTeam, hasNoDefectOfVision);

export default checkConstraints;







//
// const isDifferentAge = (fstEmployee, sndEmployee) => fstEmployee.age !== sndEmployee.age;
//
// const isNotFromSameDistrict = (fstEmployee, sndEmployee) => fstEmployee.city !== sndEmployee.city &&
//     fstEmployee.district && sndEmployee.district;
//
// const isNotFromSameTeam = (fstEmployee, sndEmployee) => fstEmployee.teamNumber !== sndEmployee.teamNumber;
//
// const hasNoDefectOfVision = (fstEmployee, sndEmployee) => fstEmployee.defectOfVision !== sndEmployee.defectOfVision;
//
// export default checkFunction = (fstEmployee, sndEmployee) =>
//     isDifferentAge(fstEmployee, sndEmployee) &&
//     isNotFromSameDistrict(fstEmployee, sndEmployee) &&
//     isNotFromSameTeam(fstEmployee, sndEmployee) &&
//     hasNoDefectOfVision(fstEmployee, sndEmployee);
//
