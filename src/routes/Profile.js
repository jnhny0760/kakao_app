import React from 'react'
import './profile.css';
import {Link} from 'react-router-dom';
import img from './images/empty.jpg';


function Profile() {
    return (
        <div>
        <p className="profile_p">Please make your screen smaller</p>
        <div id="profile_wrap">
            <header className="profile_header">
                <div className="profile_header_top">
                    <div className="profile_bar1">
                        <ul>
                            <li><i className="fas fa-plane"></i></li>
                            <li><i className="fas fa-wifi"></i></li>
                        </ul>
                    </div>
                    <div class="profile_bar2">
                        <ul>
                            <li>오후 3:27</li>
                        </ul>
                    </div>
                    <div className="profile_bar3">
                        <ul>
                            <li><i className="far fa-moon"></i></li>
                            <li><i className="fab fa-bluetooth-b"></i></li>
                            <li>80%</li>
                            <li><i className="fas fa-battery-three-quarters"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="profile_main_top">
                    <ul>
                        <li><Link to="/"><i className="fas fa-times"></i></Link></li>
                        <li><i className="fas fa-user"></i></li>
                    </ul>
                </div>
            </header>
            <div className="profile_main">
                <div className="profile_top">
                    <ul>
                        <li><img src={img} alt="프로필 사진" /></li>
                        <li>My Name</li>
                        <li><input type="text" placeholder="UserId@gmail.com"/></li>
                    </ul>
                </div>
                <div className="profile_bottom">
                    <ul>
                        <li><i className="far fa-comments"></i></li>
                        <li>My Chatroom</li>
                    </ul>
                    <ul>
                        <li><i className="fas fa-pencil-alt"></i></li>
                        <li>Edit Profile</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Profile
