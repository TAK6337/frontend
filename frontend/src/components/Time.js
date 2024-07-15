import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Time.css';

function Time() {
    const [selectedNumber, setSelectedNumber] = useState(5);

    // 갱신 버튼 클릭 시 실행될 함수
    const handleRefreshClick = () => {
        // 1부터 60 사이의 랜덤 숫자 생성
        const randomNumber = Math.floor(Math.random() * 60) + 1;
        setSelectedNumber(randomNumber);

    };

    const getImagePath = () => {
        if (selectedNumber >= 0 && selectedNumber <= 20) {
            return "/images/clean.png"; // 0부터 20 사이
        } else if (selectedNumber > 20 && selectedNumber <= 40) {
            return '/images/normal.png'; // 21부터 40 사이
        } else if (selectedNumber > 40 && selectedNumber <= 60) {
            return '/images/busy.png'; // 41부터 60 사이
        } else {
            return null; // 범위를 벗어나면 null 반환
        }
    };
    return(
        <div className="time-div">
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

            <div className="time-container">
                <div className="time-main">
                    <div className="time-title">
                        <div className="time-title-text">탑승수속 소요시간 안내</div>
                        <div className="time-title-explain">
                            <img className="time-clock-check" src="/images/clock-check.png"/>
                            <div className="time-title-explain-text">
                                실시간 셀프 체크인부터 항공기 탑승까지 평균 체류시간을 알려드립니다
                            </div>
                        </div>
                    </div>
                    <div className="time-middle">
                        <div className="time-middle-title">
                            <div className="time-middle-image">
                                <img className="time-ticket-01" src="/images/time_ticket.png"/>
                            </div>
                            <div className="time-middle-title-text">실시간 수속시간 확인</div>
                        </div>
                        <div className="time-main-image">
                            <div className="time-image-container">
                                {selectedNumber && (
                                    <img
                                        className="time-image"
                                        src={getImagePath()}
                                        alt={`Image for number ${selectedNumber}`}
                                    />
                                )}
                                <div className="time-time-container">
                                    <span className="time-time-span">
                                        {selectedNumber}
                                    </span>
                                    <span className="time-time-span2">
                                        분
                                    </span>
                                </div>


                            </div>
                            <button className="time-btn-frame" onClick={handleRefreshClick}>
                                <div className="time-btn-text">수속시간 갱신</div>
                                <img

                                    className="time-refresh"
                                    src="/images/refresh.png"
                                    alt="refresh"

                                />
                            </button>
                        </div>
                    </div>
                    <div className="time-bottom">
                        <Link to='/Time' className="time-bottom-link">
                            <div className="time-bottom-link-text">상세한 탑승 절차가 궁금하다면?</div>
                        </Link>
                        <div className="time-bottom-main">
                            <div className="time-fast">
                                <div className="time-bottom-1">
                                    <div className="time-bottom-time-1">4분</div>
                                    <div className="time-bottom-text-1">오늘 가장 빠른 체크인</div>
                                    <img className="time-luggage-01" src="/images/time_luggage.png"/>
                                </div>
                                <div className="time-bottom-1">
                                    <div className="time-bottom-time-12">2분</div>
                                    <div className="time-bottom-text-1">오늘 가장 빠른 보안 검사</div>
                                    <img className="time-user-check-02" src="/images/time_user-check.png"/>
                                </div>
                                <div className="time-bottom-1">
                                    <div className="time-bottom-time-12">6분</div>
                                    <div className="time-bottom-text-1">오늘 가장 빠른 수속 시간</div>
                                    <img className="time-plane" src="/images/plane.png"/>
                                </div>
                            </div>
                            <div className="time-slow">
                                <div className="time-bottom-1">
                                    <div className="time-bottom-time-13">16분</div>
                                    <div className="time-bottom-text-1">오늘 가장 오래 걸린 체크인</div>
                                    <img className="time-luggage-012" src="/images/time_luggage2.png"/>
                                </div>
                                <div className="time-bottom-1">
                                    <div className="time-bottom-time-14">10분</div>
                                    <div className="time-bottom-text-1">오늘 가장 오래 걸린 보안 검사</div>
                                    <img className="time-user-check-022" src="/images/time_user-check2.png"/>
                                </div>
                                <div className="time-bottom-1">
                                    <div className="time-bottom-time-15">26분</div>
                                    <div className="time-bottom-text-1">오늘 가장 오래 걸린 수속 시간</div>
                                    <img className="time-plane2" src="/images/plane2.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Time;