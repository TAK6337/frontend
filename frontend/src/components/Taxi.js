import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Taxi.css';
import NavigationBar from '../components/NavigationBar';
import {BabyChangingStation} from "@mui/icons-material";

function Taxi(){
    return(
        <div className="div">
            <NavigationBar/>
            <div className="entire">
                <div className="top">
                    <div className="subtitle">service monitorling</div>
                    <div className="title">택시 승강장 관리서비스 실시간 모니터링</div>
                    <div className="title-explain">
                        대기승객 수를 감지해 자동으로 택시를 호출합니다
                    </div>
                </div>
                <div className="main">
                    <div className="middle">
                        <div className="video-frame">
                            <div className="live">
                                <div className="red"></div>
                                <div className="live-text">Live</div>
                            </div>
                            <div className="effect">
                                <div className="effect-text">Effects : On</div>
                            </div>
                        </div>
                        <div className="middle-right">
                            <div className="waiting">
                                <div className="waiting-frame">
                                    <div className="waiting-container">
                                        <div className="waiting-container-left">
                                            <div className="waiting-text">대기승객</div>
                                            <div className="waiting-image">
                                                <div
                                                    className="user-multiple-group-close-geometric-human-multiple-person-up-user"
                                                >
                                                    <img
                                                        className="user-multiple-group-close-geometric-human-multiple-person-up-user2"
                                                        src="user-multiple-group-close-geometric-human-multiple-person-up-user1.svg"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="number">
                                            <div className="digit">8</div>
                                            <div className="span">명</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="waiting-frame">
                                    <div className="waiting-container">
                                        <div className="waiting-container-left">
                                            <div className="waiting-text">대기차량</div>
                                            <div className="waiting-image">
                                                <div
                                                    className="car-taxi-1-transportation-travel-taxi-transport-cab-car"
                                                >
                                                    <img
                                                        className="car-taxi-1-transportation-travel-taxi-transport-cab-car2"
                                                        src="car-taxi-1-transportation-travel-taxi-transport-cab-car1.svg"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="number">
                                            <div className="digit">8</div>
                                            <div className="span">대</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-container">
                                <div className="sevice-frame">
                                    <div className="service">
                                        <div className="service-text">서비스상태</div>
                                        <div className="service-condition">정상</div>
                                    </div>
                                    <div className="btn-container">
                                        <div className="btn-frame">
                                            <div className="btn-ex">택시호출</div>
                                            <div className="slide-btn">
                                                <div className="rectangle-6"></div>
                                                <div className="ellipse-16"></div>
                                            </div>
                                        </div>
                                        <div className="btn-frame">
                                            <div className="btn-ex">서비스 작동</div>
                                            <div className="slide-btn">
                                                <div className="rectangle-7"></div>
                                                <div className="ellipse-17"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="bottom-frame">
                            <div className="bottom-title">서비스 기록</div>
                            <div className="bottom-contents">
                                <div className="response">
                                    15:08 대기승객8명 대기차량8명 자동호출차량0대 서비스상태정상
                                </div>
                                <div className="response">
                                    15:09 대기승객8명 대기차량8명 자동호출차량0대 서비스상태정상
                                </div>
                                <div className="response">
                                    15:10 대기승객8명 대기차량8명 자동호출차량0대 서비스상태정상
                                </div>
                                <div className="response">
                                    15:11 대기승객9명 대기차량8명 자동호출차량1대 서비스상태정상
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default Taxi