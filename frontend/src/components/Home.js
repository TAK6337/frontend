// src/components/Home.js
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
const getRandomNumber = () => {
    return Math.floor(Math.random() * 60) + 1; // Generates a random number between 1 and 60
};
function Home() {
    const [timeDigit, setTimeDigit] = useState(45)
    const [timeDigit1, setTimeDigit1] = useState(7);
    const [timeDigit2, setTimeDigit2] = useState(13);
    const [timeDigit3, setTimeDigit3] = useState(20);
    const [timeDigit4, setTimeDigit4] = useState(7);
    const [timeDigit5, setTimeDigit5] = useState(20);


    const handleRefreshClick = () => {
        // 새로운 숫자를 랜덤으로 생성하거나, 기존 숫자에 변화를 주는 로직을 구현
        setTimeDigit(getRandomNumber());
        setTimeDigit1(getRandomNumber());
        setTimeDigit2(getRandomNumber());
        setTimeDigit3(getRandomNumber());
        setTimeDigit4(getRandomNumber());
        setTimeDigit5(getRandomNumber());

    };

    return (
        <div className="div">
            <div className="navi">
                <div className="left-side">
                    <Link to='/' className="left-side-text">서비스소개</Link>
                    <Link to='/' className="left-side-text">수속시간안내</Link>
                    <Link to='/' className="left-side-text">반입물품안내</Link>
                    <Link to='/' className="left-side-text">분실물찾기</Link>
                </div>
                <a href='/' className='main-logo'>
                    <img src="/images/main_logo.png" alt="logo"/>
                </a>
                <div className="right-side">
                    <Link to='/' className="right-side-text">분실물등록</Link>
                    <Link to='/' className="right-side-text">택시승강장관리</Link>
                    <a href='/Login' className="right-side-text">로그인</a>
                </div>
            </div>

            <div className="content">

                <div className="primary-content">
                    <div className="primary-content-main">
                        <div className="primary-content-description">
                            <div className="primary-content-title">
                                <div className="primary-content-title-main">공항도착 권장시간</div>
                                <div className="primary-content-title-sub">
                                    권장시간 전에 공항에 도착하시면 여유롭게 비행기 탑승이 가능합니다
                                </div>
                            </div>
                            <div className="primary-content-time">
                                <div className="primary-content-time-digit">{timeDigit}</div>
                                <div className="primary-content-time-text">분</div>
                            </div>
                        </div>
                        <div className="primary-content-process">
                            <div className="process-util">
                                <div className="process-name">
                                    <div className="process-name-text">탑승수속 과정</div>
                                </div>
                                <button className="refresh-btn" onClick={handleRefreshClick}>
                                    <img className="refresh" src="/images/refresh.png"/>
                                </button>
                            </div>
                            <div className="process-images">
                                <div className="process-1">
                                    <div className="process-info">
                                        <div className="pr-info">
                                            <img className="car-front" src="/images/main_car.png"/>
                                            <div className="frame-595">
                                                <div className="div2">평균</div>
                                                <div className="_7">{timeDigit1}분</div>
                                            </div>
                                        </div>
                                        <div className="pr-name">
                                            <div className="div6">공항도착(주차)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="process-2">
                                    <div className="process-info2">
                                        <div className="pr-info2">
                                            <img className="user-check-01" src="/images/user_check.png"/>
                                        </div>
                                        <div className="pr-name2">
                                            <div className="div6">셀프 체크인</div>
                                        </div>
                                    </div>
                                    <div className="process-info2">
                                        <div className="pr-info3">
                                            <img className="luggage-01" src="/images/main_luggage.png"/>
                                        </div>
                                        <div className="pr-name3">
                                            <div className="div6">수하물위탁</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="process-3">
                                    <div className="process-info2">
                                        <div className="pr-info2">
                                            <img className="group-account" src="/images/main_account.png"/>
                                        </div>
                                        <div className="pr-name4">
                                            <div className="div6">신분확인</div>
                                        </div>
                                    </div>
                                    <div className="process-info2">
                                        <div className="pr-info4">
                                            <img className="police" src="/images/police.png"/>
                                        </div>
                                        <div className="pr-name5">
                                            <div className="div6">보안검색</div>
                                        </div>
                                    </div>
                                    <div className="process-info2">
                                        <div className="pr-info3">
                                            <img className="passport" src="/images/passport.png"/>
                                        </div>
                                        <div className="pr-name6">
                                            <div className="div6">탑승시간</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="process-4">
                                    <div className="process-info2">
                                        <div className="pr-info">
                                            <img className="departure" src="/images/airplane.png"/>
                                            <div className="frame-595">
                                                <div className="div2">평균</div>
                                                <div className="_20">{timeDigit5}분</div>
                                            </div>
                                        </div>
                                        <div className="pr-name7">
                                            <div className="div6">출발</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="time-3">
                        <div className="time-text">{timeDigit2}분</div>
                    </div>
                    <div className="time-2">
                        <div className="time-text">{timeDigit3}분</div>
                    </div>
                    <div className="time-1">
                        <div className="time-text">{timeDigit4}분</div>
                    </div>
                </div>
                <div className="sub-content-1">
                    <div className="sub-content-1-description">
                        <div className="sub-content-1-rect"></div>
                        <div className="sub-content-1-text">승객분들께서 많이 찾으시는 서비스</div>
                    </div>
                    <div className="sub-content-1-main">
                        <div className="sub-content-1-line">
                            <Link to ='/' className="sub-content-1-container">
                                <div className="sub-content-1-container-description">
                                    <div className="sub-content-1-container-text-1">서비스소개</div>
                                    <div className="sub-content-1-container-right">
                                        <div className="sub-content-1-container-image"></div>
                                        <div className="arrow-box">
                                            <img
                                                className="arrow-narrow-right"
                                                src="/images/arrow_narrow_right.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to ='/' className="sub-content-1-container">
                                <div className="sub-content-1-container-description">
                                    <div className="sub-content-1-container-text-2">수속시간안내</div>
                                    <div className="sub-content-1-container-right">
                                        <div className="sub-content-1-container-image"></div>
                                        <div className="arrow-box">
                                            <img
                                                className="arrow-narrow-right2"
                                                src="/images/arrow_narrow_right.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="sub-content-1-line">
                            <Link to ='/' className="sub-content-1-container">
                                <div className="sub-content-1-container-description">
                                    <div className="sub-content-1-container-text-3">반입물품안내</div>
                                    <div className="sub-content-1-container-right">
                                        <div className="sub-content-1-container-image"></div>
                                        <div className="arrow-box">
                                            <img
                                                className="arrow-narrow-right3"
                                                src="/images/arrow_narrow_right.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to ='/' className="sub-content-1-container">
                                <div className="sub-content-1-container-description">
                                    <div className="sub-content-1-container-text-4">분실물찾기</div>
                                    <div className="sub-content-1-container-right">
                                        <div className="sub-content-1-container-image"></div>
                                        <div className="arrow-box">
                                            <img
                                                className="arrow-narrow-right4"
                                                src="/images/arrow_narrow_right.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="sub-content-2">
                    <div className="sub-content-2-main">
                        <div className="sub-content-2-rect"></div>
                        <div className="sub-content-2-text">대구공항 소식</div>
                    </div>
                    <div className="sub-content-2-container">
                        <div className="sub-content-2-container-description">
                            <div className="sub-content-2-container-description-top">
                                <div className="sub-content-2-container-description-top-container">
                                    <div className="article">
                                        <div className="article-top">
                                            <div className="article-top-left">
                                                <div className="bell-box">
                                                    <img className="bell" src="/images/bell.png"/>
                                                </div>
                                                <div className="broad-text-box">
                                                    <div className="broad-text">보도자료</div>
                                                </div>
                                                <div className="sub-container-2-date">2024.07.15</div>
                                            </div>
                                            <img className="dots-vertical" src="/images/dots-vertical.png"/>
                                        </div>
                                        <div className="article-title">
                                            [단독] 동북아 허브 꿈꾼다…대구공항,
                                            <br/>
                                            환승시설 구축 추진
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="sub-content-2-container-description-image"
                                src="/images/article_image(temp).png"
                            />
                        </div>
                        <div className="sub-content-2-container-description">
                            <div className="sub-content-2-container-description-top">
                                <div className="sub-content-2-container-description-top-container">
                                    <div className="article">
                                        <div className="article-top">
                                            <div className="article-top-left">
                                                <div className="bell-box">
                                                    <img className="bell2" src="/images/bell.png"/>
                                                </div>
                                                <div className="broad-text-box">
                                                    <div className="broad-text">보도자료</div>
                                                </div>
                                                <div className="sub-container-2-date">2024.07.15</div>
                                            </div>
                                            <img className="dots-vertical2" src="/images/dots-vertical.png"/>
                                        </div>
                                        <div className="article-title">
                                            [단독] 동북아 허브 꿈꾼다…대구공항,
                                            <br/>
                                            환승시설 구축 추진
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="sub-content-2-container-description-image"
                                src="/images/article_image(temp).png"
                            />
                        </div>
                        <div className="sub-content-2-container-description">
                            <div className="sub-content-2-container-description-top">
                                <div className="sub-content-2-container-description-top-container">
                                    <div className="article">
                                        <div className="article-top">
                                            <div className="article-top-left">
                                                <div className="bell-box">
                                                    <img className="bell3" src="/images/bell.png"/>
                                                </div>
                                                <div className="broad-text-box">
                                                    <div className="broad-text">보도자료</div>
                                                </div>
                                                <div className="sub-container-2-date">2024.07.15</div>
                                            </div>
                                            <img className="dots-vertical3" src="/images/dots-vertical.png"/>
                                        </div>
                                        <div className="article-title">
                                            [단독] 동북아 허브 꿈꾼다…대구공항,
                                            <br/>
                                            환승시설 구축 추진
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="sub-content-2-container-description-image"
                                src="/images/article_image(temp).png"
                            />
                        </div>
                    </div>
                    <div className="sub-content-2-bottom">
                        <div className="sub-content-2-box">
                            <div className="sub-content-2-description">
                                <div className="sub-content-2-text2">전체뉴스</div>
                                <Link to ='/' className="sub-content-2-link">
                                    <div className="sub-content-2-link-text">바로가기</div>
                                    <img className="arrow-narrow-right5" src="/images/arrow-narrow-right(black).png"/>
                                </Link>
                            </div>
                        </div>
                        <div className="sub-content-2-box">
                            <div className="sub-content-2-description">
                                <div className="sub-content-2-text2">보도자료</div>
                                <Link to ='/' className="sub-content-2-link">
                                    <div className="sub-content-2-link-text">바로가기</div>
                                    <img className="arrow-narrow-right6" src="/images/arrow-narrow-right(black).png"/>
                                </Link>
                            </div>
                        </div>
                        <div className="sub-content-2-box">
                            <div className="sub-content-2-description">
                                <div className="sub-content-2-text2">참고자료</div>
                                <Link to ='/' className="sub-content-2-link">
                                    <div className="sub-content-2-link-text">바로가기</div>
                                    <img className="arrow-narrow-right7" src="/images/arrow-narrow-right(black).png"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-content"></div>
            </div>
        </div>


    );
}

export default Home;