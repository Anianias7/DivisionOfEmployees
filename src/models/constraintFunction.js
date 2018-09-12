const all = (...fns) => input => fns.every(fun => fun(input));

const hasDifferentValuesOnProp = prop => ({ me, others }) => {
    return others.every(other => (!(other.variable.value) || me.variable.value[prop] !==
        other.variable.value[prop]));
};

const hasDifferentAge = hasDifferentValuesOnProp('age');
const isNotFromSameDistrictOfACity = hasDifferentValuesOnProp('cityWithDistrict');
const isNotFromSameTeam = hasDifferentValuesOnProp('teamNumber');
const hasNoDefectOfVision = hasDifferentValuesOnProp('defectOfVision');

const checkConstraints = all(hasDifferentAge, isNotFromSameDistrictOfACity, isNotFromSameTeam, hasNoDefectOfVision);

export default checkConstraints;