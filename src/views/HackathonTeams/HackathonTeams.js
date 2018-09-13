import React, {Component} from 'react'

import TeamCard from "../../components/Teams/TeamCard/TeamCard";
import ImpossibleTeamsInfo from "../../components/Teams/ImpossibleTeamInfo/ImpossibleTeamsInfo";
import Spinner from "../../components/UI/Spinner/Spinner";

import backtrack from '../../models/EmployeesTeams'
import utils from '../../utils'
import config from '../../data/config'

import classes from './HackathonTeams.css'

class HackathonTeams extends Component {

    state = ({
        teams: null,
        loading: true,
        numberOfEmployees: 4,
    });

    componentDidMount() {
        setTimeout(() => {
            const result = backtrack();
            const teams = result ?
                utils.chunkArray(result.listOfVertices.map(vertex => vertex.variable.value), config.TEAM_SIZE) :
                undefined;

            this.setState({
                loading: false,
                teams
            })
        }, 30);
    }

    mapTeamsToTeamCard = () => this.state.teams.map((team, id) =>
        <TeamCard key={id}
                  teamNumber={id}
                  teamMembers={team}
        />);

    teamsResult = () => (
        this.state.teams ? <ul className={classes.HackathonTeam}>
            {this.mapTeamsToTeamCard()}
        </ul> : <ImpossibleTeamsInfo/>
    );

    render() {
        return this.state.loading ?
            <Spinner/> :
            this.teamsResult()
    }
}

export default HackathonTeams;