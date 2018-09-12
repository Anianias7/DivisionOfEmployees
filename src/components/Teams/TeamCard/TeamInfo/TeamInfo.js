import React from 'react'

import MemberInfo from "../../MemberCard/MemberInfo/MemberInfo";

import classes from './TeamInfo.css'

const TeamInfo = ({
                      members
                  }) => {
    const mapMembers = members.map(member => <MemberInfo key={member.id} member={member}/>);

    const fieldsNames = <tr>
        <th>ID</th>
        <th>Zespół</th>
        <th>Miasto</th>
        <th>Dzielnica</th>
        <th>Wiek</th>
        <th>Wada wzroku</th>
    </tr>;

    return <table className={classes.TeamInfo}>
            <tbody>
            {fieldsNames}
            {mapMembers}
            </tbody>
        </table>

};

export default TeamInfo;