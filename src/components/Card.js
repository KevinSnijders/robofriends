import React from 'react';
import './Card.scss'

import twitter from '../assets/img/icons/twitter.png';
import facebook from '../assets/img/icons/facebook.png';
import github from '../assets/img/icons/github.png';

const Card = ({name, website, id}) => {
    return (
        <div className='card fadein'>
            <div className="card__banner">
                <div className="card__banner__image"></div>
                <div className="card__banner__robot">
                    <img alt='robots' src={`https://robohash.org/${id}?size=150x150`}/>
                </div>
            </div>

            <div className="card__robot-info">
                <h2>{name}</h2>
                <a target="_blank" rel="noopener noreferrer" href={`https://${website}`}>{website}</a>
            </div>
            <div className="card__social">
                <a target="_blank" rel="noopener noreferrer" href={"https://#"}>
                    <img alt="twitter" src={facebook}/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={"https://#"}>
                    <img alt="twitter" src={github}/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={"https://#"}>
                    <img alt="twitter" src={twitter}/>
                </a>
            </div>
            <div className="card__link">
                <a className="card__link__download" target="_blank" rel="noopener noreferrer" href={"https://#"}>
                    <span>Download</span>
                    <i className="material-icons">
                        cloud_download
                    </i>
                </a>
                <a className="card__link__contact" target="_blank" rel="noopener noreferrer" href={"https://#"}>
                    <span>Contact me</span>
                    <i className="material-icons">
                        send
                    </i>
                </a>
            </div>
        </div>
    );
};

export default Card;
