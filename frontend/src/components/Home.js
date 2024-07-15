// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
function Home() {
    return (
        <div className="div">
            <div className="div2">
                <div className="div3">
                    <div className="div4">
                        <div className="div5">
                            <div className="div6">로그인</div>
                            <div className="div7">
                                <div className="frame-476">
                                    <div className="div8">직원기능 사용에는 로그인이 필요합니다</div>
                                    <Link to='/Login' className="div9">
                                        <div className="ai">AI서비스 로그인</div>
                                    </Link>
                                    <div className="frame-475">
                                        <Link to='#' className="div10">아이디찾기</Link>
                                        <div className="rectangle-4169"></div>
                                        <Link to ='#' className="div10">비밀번호찾기</Link>
                                        <div className="rectangle-4168"></div>
                                        <Link to ='/Signup' className="div10">회원가입</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="div5">
                            <div className="div6">직원기능</div>
                            <div className="div7">
                                <div className="frame-482">
                                    <Link to ='#' className="div11">
                                        <div className="frame-479">
                                            <img className="luggage-02" src="/images/main_luggage.png"/>
                                            <div className="div12">분실물 간편등록</div>
                                        </div>
                                    </Link>
                                    <Link to ='#' className="div11">
                                        <div className="frame-480">
                                            <img className="car-01" src="/images/main_car.png"/>
                                            <div className="div12">택시승강장 관리</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div13">
                        <div className="div14">
                            <div className="div15">뉴스 · 공지사항</div>
                            <img className="chevron-right" src="chevron-right0.svg"/>
                        </div>
                        <div className="frame-483">
                            <div className="div16">[단독] 동북아 허브 꿈꾼다…대구공항...</div>
                            <div className="div16">대구시, TK 신공항 부지 이주민 지원...</div>
                            <div className="div16">“대구경북 미래100년 신공항 제대로...</div>
                            <div className="div16">대구공항 국내선 신(新) 여객터미널...</div>
                            <div className="div16">대구공항 국내선 새 여객터미널 개관식...</div>
                        </div>
                    </div>
                </div>
                <div className="div18">
                    <div className="div19">
                        <div className="div20">
                            <Link to='#' className="div21">
                                <div className="div22">
                                    <div className="div23">분실물 찾기</div>
                                </div>
                            </Link>
                            <Link to='#' className="frame-473">
                                <div className="div22">
                                    <div className="div23">반입물품확인</div>
                                </div>
                            </Link>
                            <Link to='#' className="frame-474">
                                <div className="div22">
                                    <div className="div23">여행지날씨</div>
                                </div>
                            </Link>
                        </div>
                        <div className="div24">
                            <div className="div25">고객서비스</div>
                            <div className="div26">
                                공항 내 분실물을 한눈에 확인하고
                                <br/>
                                물품에 대한 기내 반입 가능 여부를
                                <br/>
                                쳇봇에게 물어보세요
                            </div>
                        </div>
                    </div>
                    <img className="div27" src="/images/main_divider.png"/>
                    <div className="div28">
                        <div className="div28">
                            <div className="div29">
                                <div className="frame-470">
                                    <div className="frame-468">
                                        <div className="frame-4702">
                                            <div className="div30">
                                                탑승수속
                                                <br/>
                                                소요시간 안내
                                            </div>
                                            <div className="_44">
                                                <span>
                                                  <span className="_44-span">44</span>
                                                  <span className="_44-span2">분</span>
                                                </span>
                                            </div>
                                            <Link to = '#' className="frame-484">
                                                <div className="div31">자세히 보기</div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="frame-469">
                                        <div className="frame-471">
                                            <div className="div30">체크인</div>
                                            <div className="_15">
                    <span>
                      <span className="_15-span">15</span>
                      <span className="_15-span2">분</span>
                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frame-4682">
                                        <div className="frame-4703">
                                            <div className="div30">보안절차</div>
                                            <div className="_7">
                    <span>
                      <span className="_7-span">7</span>
                      <span className="_7-span2">분</span>
                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div32">


                    <div className="frame-477">
                        <Link to='#' className="div34">서비스소개</Link>
                        <Link to='#' className="div34">수속시간안내</Link>
                        <Link to='#' className="div34">반입물품안내</Link>
                        <Link to='#' className="div34">분실물찾기</Link>
                    </div>
                    <Link to='/' className="logo-container">
                        <img src="/images/main_logo.png" alt="Logo" className="logo-img"/>
                    </Link>
                    <div className="frame-485">
                        <Link to='#' className="div34">분실물등록</Link>
                        <Link to='#' className="div34">택시승강장관리</Link>
                    </div>

            </div>
        </div>

    );
}

export default Home;