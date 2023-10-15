import React from 'react';
import TeamTitle from './TeamTitle';
import TeamData from '../jsonData/TeamData.json'
import Pagination from './Pagination';
import SingleTeam from './SingleTeam';

const TeamMember = () => {
    return (
        <>
            <section className="team-page-sec te-pt-100 te-pb-70 te-md-pt-70 te-md-pb-40 te-sm-pt-50 te-sm-pb-20">
                <div className="container">
                    <TeamTitle />
                    <div className="row">
                        {TeamData.map(team =>
                            <div className="col-lg-3" key={team.id}>
                                <SingleTeam team={team} />
                            </div>
                        )}
                    </div>
                    <div className="row">
                        <Pagination />
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamMember;