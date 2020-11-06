import React from 'react';
import './more.css';
import {Link} from 'react-router-dom';
import kakaofriends from './images/kakaostory.png';
import kakaostory from './images/kakaostory.png';
import path from './images/path.png';
import img from './images/empty.jpg';

function More() {
    return (
        <div>
        <p className="more_p">Please make your screen smaller</p>
        <div id="more_wrap">
            <header className="more_header">
                <div className="more_header_top">
                    <div className="more_bar1">
                        <ul>
                            <li><i className="fas fa-plane"></i></li>
                            <li><i className="fas fa-wifi"></i></li>
                        </ul>
                    </div>
                    <div className="more_bar2">
                        <ul>
                            <li>오후 3:27</li>
                        </ul>
                    </div>
                    <div className="more_bar3">
                        <ul>
                            <li><i className="far fa-moon"></i></li>
                            <li><i className="fab fa-bluetooth-b"></i></li>
                            <li>80%</li>
                            <li><i className="fas fa-battery-three-quarters"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="more_header_bottom">
                    <ul>
                        <li></li>
                        <li>More</li>
                        <li><i className="fas fa-cog"></i></li>
                    </ul>
                </div>
            </header>
            <div className="more_user">
                <p><img src={img} alt="프로필 사진" /></p>
                <ul>
                    <li>My Name</li>
                    <li>UserId@gmail.com</li>
                </ul>
                <p className="more_chat"><i className="far fa-comment"></i></p>
            </div>
            <div className="more_list">
                <ul>
                    <li><i className="far fa-smile"></i></li>
                    <li>Emoticons</li>
                </ul>
                <ul>
                    <li><i className="fas fa-paint-brush"></i></li>
                    <li>Themes</li>
                </ul>
                <ul>
                    <li><i className="far fa-hand-peace"></i></li>
                    <li>Plus Friends</li>
                </ul>
                <ul>
                    <li><i className="far fa-user-circle"></i></li>
                    <li>Account</li>
                </ul>
            </div>
            <div className="more_plus">
                <ul>
                    <li>Plus Friends</li>
                    <li><i className="fas fa-info-circle"></i>&nbsp; Learn More</li>
                </ul>
                <ul>
                    <li><i className="fas fa-utensils"></i><span>Order</span></li>
                    <li><i className="fas fa-home"></i><span>Store</span></li>
                    <li><i className="fas fa-tv"></i><span>TV Channel/Radio</span></li>
                    <li><i className="fas fa-pencil-alt"></i><span>Creation</span></li>
                    <li><i className="fas fa-graduation-cap"></i><span>Education</span></li>
                    <li><i className="fas fa-university"></i><span>Politics/Society</span></li>
                    <li><i className="fas fa-won-sign"></i><span>Finance</span></li>
                    <li><i className="fas fa-video"></i><span>Movies/Music</span></li>
                </ul>
            </div>
            <div className="more_family">
                <ul>
                    <li><img src={kakaostory} alt="kakao story" /></li>
                    <li>Kakao Story</li>
                </ul>
                <ul>
                    <li><img src={path} alt="path" /></li>
                    <li>Path</li>
                </ul>
                <ul>
                    <li><img src={kakaofriends} alt="kakao friends" /></li>
                    <li>Kakao Friends</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default More
