// src/components/Home.js
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
const getRandomNumber = () => {
    return Math.floor(Math.random() * 60) + 1; // Generates a random number between 1 and 60
};


let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    let homeNavi = document.querySelector(".home-navi");

    if (homeNavi) {
        if (currentScroll > lastScrollTop) {
            homeNavi.style.top = "-80px"; // 네비게이션 바 높이만큼 숨김
        } else {
            homeNavi.style.top = "0";
        }
    }

    lastScrollTop = currentScroll;
});


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
        <div className="home-div">
            <div className="home-navi">
                <div className="home-left-side">
                    <Link to='/ServiceIntro' className="home-left-side-text">서비스소개</Link>
                    <Link to='/Time' className="home-left-side-text">수속시간안내</Link>
                    <Link to='/' className="home-left-side-text">반입물품안내</Link>
                    <Link to='/' className="home-left-side-text">분실물찾기</Link>
                </div>
                <a href='/' className='main-logo'>
                    <img src="/images/main_logo.png" alt="logo"/>
                </a>
                <div className="home-right-side">
                    <Link to='/' className="home-right-side-text">분실물등록</Link>
                    <Link to='/' className="home-right-side-text">택시승강장관리</Link>
                    <a href='/Login' className="home-right-side-text">로그인</a>
                </div>
            </div>

            <div className="home-content">

                <div className="home-primary-content">
                    <div className="home-primary-content-main">
                        <div className="home-primary-content-description">
                            <div className="home-primary-content-title">
                                <div className="home-primary-content-title-main">공항도착 권장시간</div>
                                <div className="home-primary-content-title-sub">
                                    권장시간 전에 공항에 도착하시면 여유롭게 비행기 탑승이 가능합니다
                                </div>
                            </div>
                            <div className="home-primary-content-time">
                                <div className="home-primary-content-time-digit">{timeDigit}</div>
                                <div className="home-primary-content-time-text">분</div>
                            </div>
                        </div>
                        <div className="home-primary-content-process">
                            <div className="home-process-util">
                                <div className="home-process-name">
                                    <div className="home-process-name-text">탑승수속 과정</div>
                                </div>
                                <button className="home-refresh-btn" onClick={handleRefreshClick}>
                                    <img className="home-refresh" src="/images/refresh.png"/>
                                </button>
                            </div>
                            <div className="home-process-images">
                                <div className="home-process-1">
                                    <div className="home-process-info">
                                        <div className="home-pr-info">
                                            <img className="home-car-front" src="/images/main_car.png"/>
                                            <div className="home-frame-595">
                                                <div className="home-div2">평균</div>
                                                <div className="home-_7">{timeDigit1}분</div>
                                            </div>
                                        </div>
                                        <div className="home-pr-name">
                                            <div className="home-div6">공항도착(주차)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-process-2">
                                    <div className="home-process-info2">
                                        <div className="home-pr-info2">
                                            <img className="home-user-check-01" src="/images/user_check.png"/>
                                        </div>
                                        <div className="home-pr-name2">
                                            <div className="home-div6">셀프 체크인</div>
                                        </div>
                                    </div>
                                    <div className="home-process-info2">
                                        <div className="home-pr-info3">
                                            <img className="home-luggage-01" src="/images/main_luggage.png"/>
                                        </div>
                                        <div className="home-pr-name3">
                                            <div className="home-div6">수하물위탁</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-process-3">
                                    <div className="home-process-info2">
                                        <div className="home-pr-info2">
                                            <img className="home-group-account" src="/images/main_account.png"/>
                                        </div>
                                        <div className="home-pr-name4">
                                            <div className="home-div6">신분확인</div>
                                        </div>
                                    </div>
                                    <div className="home-process-info2">
                                        <div className="home-pr-info4">
                                            <img className="home-police" src="/images/police.png"/>
                                        </div>
                                        <div className="home-pr-name5">
                                            <div className="home-div6">보안검색</div>
                                        </div>
                                    </div>
                                    <div className="home-process-info2">
                                        <div className="home-pr-info3">
                                            <img className="home-passport" src="/images/passport.png"/>
                                        </div>
                                        <div className="home-pr-name6">
                                            <div className="home-div6">탑승시간</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-process-4">
                                    <div className="home-process-info2">
                                        <div className="home-pr-info">
                                            <img className="home-departure" src="/images/airplane.png"/>
                                            <div className="home-frame-595">
                                                <div className="home-div2">평균</div>
                                                <div className="home-_20">{timeDigit5}분</div>
                                            </div>
                                        </div>
                                        <div className="home-pr-name7">
                                            <div className="home-div6">출발</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-time-3">
                        <div className="home-time-text">{timeDigit2}분</div>
                    </div>
                    <div className="home-time-2">
                        <div className="home-time-text">{timeDigit3}분</div>
                    </div>
                    <div className="home-time-1">
                        <div className="home-time-text">{timeDigit4}분</div>
                    </div>
                </div>
                <div className="home-sub-content-1">
                    <div className="home-sub-content-1-description">
                        <img className="home-sub-content-1-rect" src="/images/main_star.png"/>
                        <div className="home-sub-content-1-text">승객분들께서 많이 찾으시는 서비스</div>
                    </div>
                    <div className="home-sub-content-1-main">
                        <div className="home-sub-content-1-line">
                            <a href ='/ServiceIntro' className="home-sub-content-1-container">
                                <div className="home-sub-content-1-container-description">
                                    <div className="home-sub-content-1-container-text-1">서비스소개</div>
                                    <div className="home-sub-content-1-container-right">
                                        <img className="home-sub-content-1-container-image" src="/images/main_sub_plane.png"/>
                                        <div className="home-arrow-box">
                                            <img
                                                className="home-arrow-narrow-right"
                                                src="/images/arrow_narrow_right.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <Link to ='/Time' className="home-sub-content-1-container">
                                <div className="home-sub-content-1-container-description">
                                    <div className="home-sub-content-1-container-text-2">수속시간안내</div>
                                    <div className="home-sub-content-1-container-right">
                                        <img className="home-sub-content-1-container-image" src="/images/main_sub_ticket.png"/>
                                        <div className="home-arrow-box">
                                            <img
                                                className="home-arrow-narrow-right2"
                                                src="/images/arrow_narrow_right.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="home-sub-content-1-line">
                            <Link to ='/' className="home-sub-content-1-container">
                                <div className="home-sub-content-1-container-description">
                                    <div className="home-sub-content-1-container-text-3">반입물품안내</div>
                                    <div className="home-sub-content-1-container-right">
                                        <img className="home-sub-content-1-container-image" src="/images/main_sub_bag.png"/>
                                        <div className="home-arrow-box">
                                            <img
                                                className="home-arrow-narrow-right3"
                                                src="/images/arrow_narrow_right.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to ='/' className="home-sub-content-1-container">
                                <div className="home-sub-content-1-container-description">
                                    <div className="home-sub-content-1-container-text-4">분실물찾기</div>
                                    <div className="home-sub-content-1-container-right">
                                        <img className="home-sub-content-1-container-image" src="/images/main_sub_luggage.png"/>
                                        <div className="home-arrow-box">
                                            <img
                                                className="home-arrow-narrow-right4"
                                                src="/images/arrow_narrow_right.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="home-sub-content-2">
                    <div className="home-sub-content-2-main">
                        <img className="home-sub-content-2-rect" src="/images/main_cursor.png"/>
                        <div className="home-sub-content-2-text">대구공항 소식</div>
                    </div>
                    <div className="home-sub-content-2-container">
                        <div className="home-sub-content-2-container-description">
                            <div className="home-sub-content-2-container-description-top">
                                <div className="home-sub-content-2-container-description-top-container">
                                    <div className="home-article">
                                        <div className="home-article-top">
                                            <div className="home-article-top-left">
                                                <div className="home-bell-box">
                                                    <img className="home-bell" src="/images/bell.png"/>
                                                </div>
                                                <div className="home-broad-text-box">
                                                    <div className="home-broad-text">보도자료</div>
                                                </div>
                                                <div className="home-sub-container-2-date">2024.07.15</div>
                                            </div>
                                            <img className="home-dots-vertical" src="/images/dots-vertical.png"/>
                                        </div>
                                        <div className="home-article-title">
                                            [단독] 동북아 허브 꿈꾼다…대구공항,
                                            <br/>
                                            환승시설 구축 추진
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="home-sub-content-2-container-description-image"
                                src="/images/article_image(temp).png"
                            />
                        </div>
                        <div className="home-sub-content-2-container-description">
                            <div className="home-sub-content-2-container-description-top">
                                <div className="home-sub-content-2-container-description-top-container">
                                    <div className="home-article">
                                        <div className="home-article-top">
                                            <div className="home-article-top-left">
                                                <div className="home-bell-box">
                                                    <img className="home-bell2" src="/images/bell.png"/>
                                                </div>
                                                <div className="home-broad-text-box">
                                                    <div className="home-broad-text">보도자료</div>
                                                </div>
                                                <div className="home-sub-container-2-date">2024.07.15</div>
                                            </div>
                                            <img className="home-dots-vertical2" src="/images/dots-vertical.png"/>
                                        </div>
                                        <div className="home-article-title">
                                            [단독] 동북아 허브 꿈꾼다…대구공항,
                                            <br/>
                                            환승시설 구축 추진
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="home-sub-content-2-container-description-image"
                                src="/images/article_image(temp).png"
                            />
                        </div>
                        <div className="home-sub-content-2-container-description">
                            <div className="home-sub-content-2-container-description-top">
                                <div className="home-sub-content-2-container-description-top-container">
                                    <div className="home-article">
                                        <div className="home-article-top">
                                            <div className="home-article-top-left">
                                                <div className="home-bell-box">
                                                    <img className="home-bell3" src="/images/bell.png"/>
                                                </div>
                                                <div className="home-broad-text-box">
                                                    <div className="home-broad-text">보도자료</div>
                                                </div>
                                                <div className="home-sub-container-2-date">2024.07.15</div>
                                            </div>
                                            <img className="home-dots-vertical3" src="/images/dots-vertical.png"/>
                                        </div>
                                        <div className="home-article-title">
                                            [단독] 동북아 허브 꿈꾼다…대구공항,
                                            <br/>
                                            환승시설 구축 추진
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="home-sub-content-2-container-description-image"
                                src="/images/article_image(temp).png"
                            />
                        </div>
                    </div>
                    <div className="home-sub-content-2-bottom">
                        <div className="home-sub-content-2-box">
                            <div className="home-sub-content-2-description">
                                <div className="home-sub-content-2-text2">전체뉴스</div>
                                <Link to ='/' className="home-sub-content-2-link">
                                    <div className="home-sub-content-2-link-text">바로가기</div>
                                    <img className="home-arrow-narrow-right5" src="/images/arrow-narrow-right(black).png"/>
                                </Link>
                            </div>
                        </div>
                        <div className="home-sub-content-2-box">
                            <div className="home-sub-content-2-description">
                                <div className="home-sub-content-2-text2">보도자료</div>
                                <Link to ='/' className="home-sub-content-2-link">
                                    <div className="home-sub-content-2-link-text">바로가기</div>
                                    <img className="home-arrow-narrow-right6" src="/images/arrow-narrow-right(black).png"/>
                                </Link>
                            </div>
                        </div>
                        <div className="home-sub-content-2-box">
                            <div className="home-sub-content-2-description">
                                <div className="home-sub-content-2-text2">참고자료</div>
                                <Link to ='/' className="home-sub-content-2-link">
                                    <div className="home-sub-content-2-link-text">바로가기</div>
                                    <img className="home-arrow-narrow-right7" src="/images/arrow-narrow-right(black).png"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-footer">
                <div className="home-footer-content"></div>
            </div>
        </div>


    );
}

export default Home;