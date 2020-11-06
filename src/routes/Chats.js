import React from 'react'
import './chats.css';
import img from './images/empty.jpg';
import {Link} from 'react-router-dom';

function Chats() {
    return (
        <div>
            <p className="chats_p">Please make your screen smaller</p>
            <div id="chats_wrap">
                <header className="chats_header">
                    <div className="chats_header_top">
                        <div className="chats_bar1">
                            <ul>
                                <li><i className="fas fa-plane"></i></li>
                                <li><i className="fas fa-wifi"></i></li>
                            </ul>
                        </div>
                        <div className="chats_bar2">
                            <ul>
                                <li>오후 3:27</li>
                            </ul>
                        </div>
                        <div className="chats_bar3">
                            <ul>
                                <li><i className="far fa-moon"></i></li>
                                <li><i className="fab fa-bluetooth-b"></i></li>
                                <li>80%</li>
                                <li><i className="fas fa-battery-three-quarters"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div className="chats_header_bottom">
                        <ul>
                            <li>Edit</li>
                            <li>Chats<span><i className="fas fa-caret-down"></i></span></li>
                            <li></li>
                        </ul>
                    </div>
                </header>
                <div className="chats_srch">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Find friends, chats, Plus Friends" />
                </div>
                <div className="chats_friends">
                    <ul>
                        <Link to="/chat">
                            <li><img src={img} alt="프로필사진" /></li>
                            <li>
                                <ul>
                                    <li>Friends Name</li>
                                    <li>Hello! This is a test message!</li>
                                    <li className="time">11:23</li>
                                </ul>
                            </li>
                        </Link>
                    </ul>
                    <ul>
                        <Link to="/chat">
                            <li><img src={img} alt="프로필사진" /></li>
                            <li>
                                <ul>
                                    <li>Friends Name</li>
                                    <li>Hello! This is a test message!</li>
                                    <li className="time">11:23</li>
                                </ul>
                            </li>
                        </Link>
                    </ul>
                    <ul>
                        <Link to="/chat">
                            <li><img src={img} alt="프로필사진" /></li>
                            <li>
                                <ul>
                                    <li>Friends Name</li>
                                    <li>Hello! This is a test message!</li>
                                    <li className="time">11:23</li>
                                </ul>
                            </li>
                        </Link>
                    </ul>
                    <ul>
                        <Link to="/chat">
                            <li><img src={img} alt="프로필사진" /></li>
                            <li>
                                <ul>
                                    <li>Friends Name</li>
                                    <li>Hello! This is a test message!</li>
                                    <li className="time">11:23</li>
                                </ul>
                            </li>
                        </Link>
                    </ul>
                    <ul>
                        <Link to="/chat">
                            <li><img src={img} alt="프로필사진" /></li>
                            <li>
                                <ul>
                                    <li>Friends Name</li>
                                    <li>Hello! This is a test message!</li>
                                    <li className="time">11:23</li>
                                </ul>
                            </li>
                        </Link>
                    </ul>
                    <ul>
                        <Link to="/chat">
                            <li><img src={img} alt="프로필사진" /></li>
                            <li>
                                <ul>
                                    <li>Friends Name</li>
                                    <li>Hello! This is a test message!</li>
                                    <li className="time">11:23</li>
                                </ul>
                            </li>
                        </Link>
                    </ul>
                    <ul>
                        <Link to="/chat">
                            <li><img src={img} alt="프로필사진" /></li>
                            <li>
                                <ul>
                                    <li>Friends Name</li>
                                    <li>Hello! This is a test message!</li>
                                    <li className="time">11:23</li>
                                </ul>
                            </li>
                        </Link>
                    </ul>
                    <ul>
                        <Link to="/chat">
                            <li><img src={img} alt="프로필사진" /></li>
                            <li>
                                <ul>
                                    <li>Friends Name</li>
                                    <li>Hello! This is a test message!</li>
                                    <li className="time">11:23</li>
                                </ul>
                            </li>
                        </Link>
                    </ul>
                    <ul>
                        <Link to="/chat">
                            <li><img src={img} alt="프로필사진" /></li>
                            <li>
                                <ul>
                                    <li>Kakao Talk</li>
                                    <li>You logged into KakaoTalk PC</li>
                                    <li className="time">11:23</li>
                                </ul>
                            </li>
                        </Link>
                    </ul>
                </div>
                <p className="chats_kakao"><i className="far fa-comments"></i></p>
            </div>
        </div>
    );
};

export default Chats;
