import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const SocialFollow = () => {
    return (
        <div class="social-container">
            <h3>Connect With Us</h3>
            <a href="https://www.instagram.com/jackfruitfoundation/" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size ="2x"/>
            </a>
            <a href="https://www.google.com" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size ="2x"/>
            </a>
        </div>
    )
}

export default SocialFollow
