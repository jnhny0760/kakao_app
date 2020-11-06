import React from 'react'
import {Link} from 'react-router-dom';
import './friends.css';
import img from './images/empty.jpg';

function Friends() {
    return (
        <div>
        <p className="friends_p">Please make your screen smaller</p>
        <div id="friends_wrap">
            <header className="friends_header">
                <div className="friends_header_top">
                    <div className="friends_bar1">
                        <ul>
                            <li><i className="fas fa-plane"></i></li>
                            <li><i className="fas fa-wifi"></i></li>
                        </ul>
                    </div>
                    <div className="friends_bar2">
                        <ul>
                            <li>오후 3:27</li>
                        </ul>
                    </div>
                    <div className="friends_bar3">
                        <ul>
                            <li><i className="far fa-moon"></i></li>
                            <li><i className="fab fa-bluetooth-b"></i></li>
                            <li>80%</li>
                            <li><i class="fas fa-battery-three-quarters"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="friends_header_bottom">
                    <ul>
                        <li>Manage</li>
                        <li>Friends<span>1</span></li>
                        <li><i className="fas fa-cog"></i></li>
                    </ul>
                </div>
            </header>
            <div className="friends_srch">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Find friends, chats, Plus Friends"/>
            </div>
            <hr/>
            <p className="friends_head">My Profile</p>
            <hr/>
            <div className="friends_main">
                <ul>
                    <li><img src={img} alt="프로필 사진" /></li>
                    <li><Link to="/profile">My Name</Link></li>
                </ul>
                <ul>
                    <li><img src={img} alt="프로필 사진" /></li>
                    <li>Friends' Names Display</li>
                </ul>
            </div>
            <hr/>
            <p className="friends_head">Friends</p>
            <hr/>
            <div className="friends_friends">
                <ul>
                    <li><img src={img} alt="프로필 사진" /></li>
                    <li>Friend Name</li>
                    <li>Have a good day. See you soon.</li>
                </ul>
                <ul>
                    <li><img src={img} alt="프로필 사진" /></li>
                    <li>Friend Name</li>
                    <li>Have a good day. See you soon.</li>
                </ul>
                <ul>
                    <li><img src={img} alt="프로필 사진" /></li>
                    <li>Friend Name</li>
                    <li>Have a good day. See you soon.</li>
                </ul>
                <ul>
                    <li><img src={img} alt="프로필 사진" /></li>
                    <li>Friend Name</li>
                    <li>Have a good day. See you soon.</li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Friends
