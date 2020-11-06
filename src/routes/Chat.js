import React from 'react'
import {Link} from 'react-router-dom';
import './chat.css';

function Chat() {
    return (
        <div>
        <p className="chat_p">Please make your screen smaller</p>
        <div id="chat_wrap">
            <header className="chat_header">
                <div className="chat_header_top">
                    <div className="chat_bar1">
                        <ul>
                            <li><i className="fas fa-plane"></i></li>
                            <li><i className="fas fa-wifi"></i></li>
                        </ul>
                    </div>
                    <div className="bar2">
                        <ul>
                            <li>오후 3:27</li>
                        </ul>
                    </div>
                    <div className="chat_bar3">
                        <ul>
                            <li><i className="far fa-moon"></i></li>
                            <li><i className="fab fa-bluetooth-b"></i></li>
                            <li>80%</li>
                            <li><i className="fas fa-battery-three-quarters"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="chat_header_bottom">
                    <ul>
                        <li><Link to="/chats"><i className="fas fa-chevron-left"></i></Link></li>
                        <li>Friend Name</li>
                        <li><i className="fas fa-search"></i>&nbsp;<i class="fas fa-bars"></i></li>
                    </ul>
                </div>
            </header>
            <hr/>
            <div className="chat_main">
                <p className="chat_day">tuesday, November 03, 2020</p>
                <ul className="chat_me">
                    <li><span>This is a test message</span></li>
                    <li><span>Anybody do the things you doing before</span></li>
                    <li><span>There is a song that inside of my souls</span></li>
                </ul>
                <p>6:35pm</p>
                <ul className="chat_you">
                    <li><span>This is an answer</span></li>
                    <li><span>dance for me dance for me dance for me</span></li>
                    <li><span>it is the one thst I've try to write over and over again</span></li>
                </ul>
                <p className="chat_right">8:06pm</p>
            </div>
            <div className="chat_chat_area">
                <ul>
                    <li><i className="fas fa-plus"></i></li>
                    <input type="text" />
                    <li><i className="far fa-smile"></i></li>
                    <li><i className="fas fa-microphone"></i></li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Chat;
