import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';
import landingImg from '../../assets/images/landing.png';

import bookIcon from '../../assets/images/icons/study.svg';
import bookShelfIcon from '../../assets/images/icons/bookshelf.png';
import redHeartIcon from '../../assets/images/icons/red-heart.png';

import './styles.css';

export default function Landing() {
    return (
        <div id="page-landing"> 
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="BookClub"/>
                    <h2>Compartilhe suas histórias.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de leitura" className="landing-image"/>
                
                <div className="buttons-container">
                    <Link to="/read" className="read">
                        <img src={bookIcon} alt="Pedir"/>
                        Pedir um livro
                    </Link>

                    <Link to="/lend" className="lend">
                        <img src={bookShelfIcon} alt="Emprestar"/>
                        Emprestar um livro
                    </Link>
                </div>
                
                <span className="total-connections">
                    Total de x histórias já compartilhadas <img src={redHeartIcon} alt="s2 "/>
                </span>

            </div>
        </div>    
    )
}