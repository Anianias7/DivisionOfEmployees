import React, {Component} from 'react'

import MemberCard from "../MemberCard/MemberCard";
import TeamInfo from './TeamInfo/TeamInfo'

import classes from './TeamCard.css'


class TeamCard extends Component {

    state = ({
        showDetailedInfo: false
    });

    mapTeamMembers = () => this.props.teamMembers.map(member => <li key={member.id}>
        <MemberCard member={member}/>
    </li>);

    showTeamInfo = () => {
        this.setState({
            showDetailedInfo: !this.state.showDetailedInfo
        })
    };

    render() {
        return <div className={classes.TeamCardAndInfo}>
            <div className={classes.TeamCard}
                 onClick={() => this.showTeamInfo()}>
                <header className={classes.TeamNumber}>
                    TEAM {this.props.teamNumber + 1}
                </header>
                <ul className={classes.EmployeesSection}>
                    {this.mapTeamMembers()}
                </ul>
            </div>
            {this.state.showDetailedInfo ? <div><TeamInfo members={this.props.teamMembers}/></div> : null}
        </div>
    }
}

export default TeamCard;