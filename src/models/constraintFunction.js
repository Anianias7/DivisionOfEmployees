const all = (...fns) => input => fns.every(fun => fun(input));

export const hasDifferentValuesOnProp = prop => ({ me, others }) => {
    return others.every(other => (!(other.variable.value) || me.variable.value[prop] !==
        other.variable.value[prop]));
};

const hasLessThanTwoTrueValueOnProp = prop => ({ me, others }) => {
    const meAndOthers = [...others].concat(me);
    return meAndOthers.filter(val => val.variable.value && val.variable.value[prop] === "true").length < 2;
    // return me.variable.value[prop] === "false" || (me.variable.value[prop] === "true"
    //     && !others.some(val => val.variable.value && val.variable.value[prop] === "true"))

};

const hasDifferentAge = hasDifferentValuesOnProp('age');
const isNotFromSameDistrictOfACity = hasDifferentValuesOnProp('cityWithDistrict');
const isNotFromSameTeam = hasDifferentValuesOnProp('teamNumber');
const hasNoDefectOfVision = hasLessThanTwoTrueValueOnProp('defectOfVision');

const checkConstraints = all(hasDifferentAge, isNotFromSameDistrictOfACity, isNotFromSameTeam, hasNoDefectOfVision);

export default checkConstraints;