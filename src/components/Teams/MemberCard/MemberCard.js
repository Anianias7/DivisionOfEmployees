import React from 'react'

import classes from './MemberCard.css'

const MemberCard = ({
                        member
                    }) => {
        return <div className={classes.MemberCard}>
            <p>{member.firstName} {member.lastName}</p>
        </div>
    };

export default MemberCard;