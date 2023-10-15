import React from 'react';
import SocialShare from './SocialShare';
import { HashLink as Link } from 'react-router-hash-link';

const SingleTeam = ({ team }) => {
    let { image, name, title } = team;

    return (
        <>
            <div className="single-team">
                <div className="team-border">
                    <div className="team-thumb">
                        <img src={`/img/team/${image}`} alt="team" />
                    </div>
                </div>
                <div className="team-info">
                    <div className="team-soical-profile">
                        <SocialShare />
                    </div>
                    <h2><Link to="/team-details#">{name}</Link></h2>
                    <span className="team-designation">{title}</span>
                </div>
            </div>
        </>
    );
};

export default SingleTeam;