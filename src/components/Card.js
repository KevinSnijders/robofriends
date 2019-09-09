import React from 'react';
import './Card.scss'
import image from '../assets/img/background.jpg';
import twitter from '../assets/img/icons/twitter.png';

const Card = ({name, website, id}) => {
    return (
        <div className='card fadein grow'>
            <div className="card__image">
                <div className="card__image__background">
                    <img alt='background' src={image}/>
                </div>
                <div className="card__image__profile">
                    <img alt='robots' src={`https://robohash.org/${id}?size=150x150`}/>
                </div>
            </div>

            <div className="card__robot-info">
                <h2>{name}</h2>
                <a target="_blank" rel="noopener noreferrer" href={`https://${website}`}>{website}</a>
            </div>
            <div className="card__social">
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
