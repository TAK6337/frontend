// Items.js
import React from 'react';
import '../styles/Items.css';
import NavigationBar from "./NavigationBar";

const Items = () => {
    return (
        <div className="items-container">
            <NavigationBar/>
            <header className="items-header">
                <h1 className="items-title">기내 반입 금지물품</h1>
                <p className="items-description">홈페이지 내의 정보는 참고사항으로 정확한 정보는 해당 항공사/기관/시설에 확인하여 주시기 바랍니다.</p>
                <button className="items-info-button">기내반입 금지물품 챗봇에게 물어보기</button>
            </header>
            <nav className="items-nav">
                <ul className="items-nav-list">
                    <li className="items-nav-item items-active">액체류</li>
                    <li className="items-nav-item">위해물품</li>
                    <li className="items-nav-item">위험물</li>
                </ul>
            </nav>
            <section className="items-section">
                <h2 className="items-subtitle">액체류</h2>
                <div className="items-items">
                    <div className="items-item">
                        <h3 className="items-item-title">액체, 스프레이, 젤 형태의 화장품, 세면용품 또는 의약품류 등</h3>
                        <p className="items-item-description">기내 휴대 불가능</p>
                        <p className="items-item-note">단, 개별 용기당 100ml 이하로 1인당 1L 비닐 지퍼백 1개에 한해 반입 가능하며, 국내선은 제한 없음</p>
                        <p className="items-item-extra">위탁수하물 가능</p>
                    </div>
                    <div className="items-item">
                        <h3 className="items-item-title">고추장/김치 등 액체가 포함되어 있거나 젤 형태의 음식류</h3>
                        <p className="items-item-description">기내 휴대 불가능</p>
                        <p className="items-item-note">단, 개별 용기당 100ml 이하로 1인당 1L 비닐 지퍼백 1개에 한해 반입 가능하며, 국내선은 제한 없음</p>
                        <p className="items-item-extra">위탁수하물 가능 (용량 제한 없이 가능)</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Items;
