import React from 'react'

import classes from './MemberInfo.css'

const MemberInfo = ({
                        member
                    }) => (
    <tr className={classes.MemberInfo}>
        <td>{member.id}</td>
        <td>{member.teamNumber}</td>
        <td>{member.city}</td>
        <td>{member.district}</td>
        <td>{member.age}</td>
        <td>{member.defectOfVision}</td>
    </tr>
);

export default MemberInfo;