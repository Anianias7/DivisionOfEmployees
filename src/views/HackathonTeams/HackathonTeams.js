import React, {Component} from 'react'

import TeamCard from "../../components/Teams/TeamCard/TeamCard";
import backtrack from "../../models/EmployeesTeams"

import classes from './HackathonTeams.css'
import ImpossibleTeamsInfo from "../../components/Teams/ImpossibleTeamInfo/ImpossibleTeamsInfo";
import utils from "../../utils";
import Spinner from "../../components/UI/Spinner/Spinner";

class HackathonTeams extends Component {

    state = ({
        teams: null,
        loading: true
    });

    componentDidMount() {
        setTimeout(() => {
            const result = backtrack();
            const teams = result ? utils.chunkArray(result.listOfVertices.map(vertex => vertex.variable.value), 2) : undefined;
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