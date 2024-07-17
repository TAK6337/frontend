import React, {useState} from 'react';
import '../styles/Items.css';
import NavigationBar from "./NavigationBar";


const Items = () => {
    const [activeSection, setActiveSection] = useState('prohibited');

    const handleNavClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="items-container">
            <NavigationBar/>
            <header className="items-header">
                <h1 className="items-title">기내 반입 금지물품</h1>
                <p className="items-description">
                    홈페이지 내의 정보는 참고사항으로 정확한 정보는 해당 항공사/기관/시설에 확인하여 주시기 바랍니다.
                </p>
                <button className="items-info-button">기내반입 금지물품 챗봇에게 물어보기
                    <img src="/images/Items_img/chat-bot.png"
                         alt="Chat Bot"
                         className="items-info-image"/>
                </button>
            </header>

            <nav className="items-nav">
                <ul className="items-nav-list">
                    <li
                        className={`items-nav-item ${activeSection === 'prohibited' ? 'items-active' : ''}`}
                        onClick={() => handleNavClick('prohibited')}
                    >
                        항공 운송 금지 품목
                    </li>
                    <li
                        className={`items-nav-item ${activeSection === 'restricted' ? 'items-active' : ''}`}
                        onClick={() => handleNavClick('restricted')}
                    >
                        제한적으로 운송 가능한 품목
                    </li>
                    <li
                        className={`items-nav-item ${activeSection === 'electric' ? 'items-active' : ''}`}
                        onClick={() => handleNavClick('electric')}
                    >
                        휴대용 일반 전자기기의 리튬배터리 운송 규정 안내
                    </li>
                    <li
                        className={`items-nav-item ${activeSection === 'liquids' ? 'items-active' : ''}`}
                        onClick={() => handleNavClick('liquids')}
                    >
                        액체류 반입 기준
                    </li>
                    <li
                        className={`items-nav-item ${activeSection === 'exception' ? 'items-active' : ''}`}
                        onClick={() => handleNavClick('exception')}
                    >
                        기내 반입 제한 예외 대상 물품
                    </li>
                </ul>
            </nav>

            {activeSection === 'prohibited' && (
                <section className="items-section">
                    <h2 className="items-subtitle">항공 운송 금지 품목</h2>
                    <div className="items-items">
                        <div className="items-item">
                            <img src="/images/Items_img/no_battery.png" alt="No Battery" className="items-item-image"/>
                            <h3 className="items-item-title">리튬배터리로 구동되는 일체형 탈 것류, 160Wh 초과하는 리튬배터리</h3>
                            <p className="items-item-description">에어휠, 솔로휠, 호버보드, 미니 세그웨이,
                                전기자전거(전동스쿠터), 전동 킥보드 등
                                (장애인, 노약자용 전동휠체어 제외)</p>
                        </div>
                        <div className="items-item">
                            <img src="/images/Items_img/no_bomb.png" alt="No Bomb" className="items-item-image"/>
                            <h3 className="items-item-title">폭발성, 인화성, 유독성 물질</h3>
                            <p className="items-item-description">수류탄, 다이너마이트, 폭죽, 표백제, 수은,
                                산화제, 독극물, 도수 70%이상 알코올성 음료,
                                소화기, 최루가스 등</p>
                        </div>
                        <div className="items-item">
                            <img src="/images/Items_img/no_case.png" alt="No Case" className="items-item-image"/>
                            <h3 className="items-item-title">인화성 고압가스가 들어있는 용기</h3>
                            <p className="items-item-description">부탄가스, 개인용 산소통 등
                                * 개인용 산소통은 사전예약을 통해 당사에서
                                제공하는 산소통을 이용하시기 바랍니다.</p>
                        </div>
                    </div>
                </section>
            )}

            {activeSection === 'restricted' && (
                <section className="items-section">
                    <h2 className="items-subtitle">제한적으로 운송 가능한 품목</h2>
                    <div className="restricted-container">
                        <div className="restricted-list-wrapper">
                            <ul className="restricted-list">
                                <li>
                                    여분의 리튬배터리(보조배터리), 전자담배, 라이터는 부치는 짐으로 운송 불가, 휴대하여 객실 반입만 허용 (단, 충전식 전기라이터는 전 노선 위탁, 객실 반입 불가)
                                </li>
                                <li>1인당 2.5kg 이내의 드라이아이스</li>
                                <li>
                                    용기당(미국행) 또는 인당(호주발) 350ml 미만의 분말류(파우더류) 물품
                                    (&#039;18.6.30 부, 미국행/호주발 국제선 항공편에 한함)
                                </li>
                            </ul>
                        </div>
                        <div className="transport-container">
                            <div className="transport-header">위탁 수하물 운송 (객실 휴대 불가)</div>
                            <div className="transport-header">휴대 수하물 운송 (부치는 짐 불가)</div>
                        </div>
                        <div className="detailed-transport-container">
                            <div className="detailed-transport-item">
                                <ul className="detailed-transport-list">
                                    <li>도검, 칼 등 도검류</li>
                                    <li>야구배트, 골프채, 아령 등 스포츠용품류</li>
                                    <li>
                                        권총, 소총, 전자충격기, 총알 등 총기류 (항공사 승인 필요)
                                    </li>
                                    <li>망치, 못, 드릴 등 공구류</li>
                                    <li>쌍절곤, 격투무기, 수갑 등 무술호신용품</li>
                                    <li>100ml 초과하는 액체류 (국제선 노선 대상)</li>
                                    <li>
                                        에어로졸을 포함한 세면용품은 인당 최대 2L, 용기당 최대 500ml
                                        까지 허용
                                    </li>
                                </ul>
                            </div>
                            <div className="detailed-transport-item">
                                <ul className="detailed-transport-list">
                                    <li>라이터(1개), 성냥(1개)</li>
                                    <li>
                                        중국 출발편에서는 일체 운송 금지
                                        <br />
                                        (단, 충전식 전기라이터는 전 노선 위탁, 객실 반입 불가)
                                    </li>
                                    <li>
                                        160Wh 이하 단락 방지 포장된 여분의 리튬배터리 및 보조배터리
                                    </li>
                                    <li>전자담배</li>
                                    <li>기내 및 여행지에서 복용해야 하는 의약품</li>
                                    <li>
                                        쉽게 파손되거나 부패될 수 있는 물품, 화폐, 유가증권, 보석류,
                                        고가품 및 귀중품 등
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )}


            {activeSection === 'electric' && (
                <section className="items-section">
                    <h2 className="items-subtitle">제한적으로 운송 가능한 품목</h2>
                    <div className="items-items">
                        <div className="items-item">
                            <h3 className="items-item-title">운송 가능한 품목</h3>
                            <p className="items-item-description">여분의 리튬배터리(보조배터리), 전자담배, 라이터는 부치는 짐으로 운송 불가</p>
                            <p className="items-item-description">1인당 2.5kg 이내의 드라이아이스</p>
                            <p className="items-item-description">용기당(캔 및 병) 또는 인당(휴대품) 350ml 미만의 분말류</p>
                        </div>
                    </div>
                </section>
            )}

            {activeSection === 'liquids' && (
                <section className="items-section">
                    <h2 className="items-subtitle">액체류 반입 기준</h2>
                    <div className="items-items">
                        <div className="items-item">
                            <h3 className="items-item-title">액체류 반입 기준</h3>
                            <p className="items-item-description">각 용기의 용량이 100ml 이하인 1인당 1개의 1L 용량의 투명 비닐 지퍼백에 넣어 휴대반입이
                                가능합니다.</p>
                            <p className="items-item-description">당뇨병 환자용 및 의약품은 항공사에 필요한 용량에 한하여 기내에 반입할 수 있습니다.</p>
                        </div>
                    </div>
                </section>
            )}
            {activeSection === 'exception' && (
                <section className="items-section">
                    <h2 className="items-subtitle">제한적으로 운송 가능한 품목</h2>
                    <div className="items-items">
                        <div className="items-item">
                            <h3 className="items-item-title">운송 가능한 품목</h3>
                            <p className="items-item-description">여분의 리튬배터리(보조배터리), 전자담배, 라이터는 부치는 짐으로 운송 불가</p>
                            <p className="items-item-description">1인당 2.5kg 이내의 드라이아이스</p>
                            <p className="items-item-description">용기당(캔 및 병) 또는 인당(휴대품) 350ml 미만의 분말류</p>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default Items;
