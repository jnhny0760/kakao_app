import React from 'react';
import './find.css';
import {Link} from 'react-router-dom';

function Find() {
    return (
        <div>
            <p className="find_p">Please make your screen smaller</p>
        <div id="find_wrap">
        <header className="find_header">
            <div className="find_header_top">
                <div className="find_bar1">
                    <ul>
                        <li><i className="fas fa-plane"></i></li>
                        <li><i className="fas fa-wifi"></i></li>
                    </ul>
                </div>
                <div className="find_bar2">
                    <ul>
                        <li>오후 3:27</li>
                    </ul>
                </div>
                <div className="find_bar3">
                    <ul>
                        <li><i className="far fa-moon"></i></li>
                        <li><i className="fab fa-bluetooth-b"></i></li>
                        <li>80%</li>
                        <li><i className="fas fa-battery-three-quarters"></i></li>
                    </ul>
                </div>
            </div>
            <div className="find_header_bottom">
                <ul>
                    <li>Edit</li>
                    <li>Find</li>
                    <li></li>
                </ul>
            </div>
        </header>
        <div className="find_top_banner">
            <ul>
                <li><i className="fas fa-address-book"></i></li>
                <li>Find</li>
            </ul>
            <ul>
                <li><i className="fas fa-qrcode"></i></li>
                <li>QR Code</li>
            </ul>
            <ul>
                <li><i className="fas fa-mobile-alt"></i></li>
                <li>Shake</li>
            </ul>
            <ul>
                <li><i className="far fa-envelope"></i></li>
                <li>Invite via SMS</li>
            </ul>
        </div>
        <div className="find_main">
            <ul>
                <li>Recommended Friends</li>
                <li>You have recommended friends.</li>
            </ul>
        </div>
        </div>
        </div>
    )
}

export default Find
