import React, {Component} from 'react'

import TeamCard from "../../components/Teams/TeamCard/TeamCard";
import ImpossibleTeamsInfo from "../../components/Teams/ImpossibleTeamInfo/ImpossibleTeamsInfo";
import Spinner from "../../components/UI/Spinner/Spinner";

import backtrack from "../../models/EmployeesTeams"
import TEAM_SIZE from '../../data/config'
import utils from "../../utils";

import classes from './HackathonTeams.css'

class HackathonTeams extends Component {

    state = ({
        teams: null,
        loading: true
    });

    componentDidMount() {
        setTimeout(() => {
            const result = backtrack();
            const teams = result ? utils.chunkArray(result.listOfVertices.map(vertex => vertex.variable.value), TEAM_SIZE) : undefined;
            this.setState({
                loading: false,
                teams
            })
        }, 30);
    }

    mapTeamsToTeamCard = () => this.state.teams ? this.state.teams.map((team, id) =>
        <TeamCard key={id}
                  teamNumber={id}
                  teamMembers={team}
        />) : null;

    render() {
        console.log(this.state.teams)
        return (
            this.state.loading ? <Spinner/> : (
                this.state.teams ? <ul className={classes.HackathonTeam}>
                    {this.mapTeamsToTeamCard()}
                </ul> : <ImpossibleTeamsInfo/>)
        )
    }
}

export default HackathonTeams;