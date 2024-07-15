import React, { useState } from 'react';
import '../styles/PrivacyAgreement.css';
import { useNavigate } from 'react-router-dom';

const PrivacyAgreement = ({ setAgreed }) => {
    const [allAgreed, setAllAgreed] = useState(false);
    const [serviceAgreed, setServiceAgreed] = useState(false);
    const [privacyAgreed, setPrivacyAgreed] = useState(false);
    const navigate = useNavigate();

    const handleAllAgreeChange = () => {
        const newValue = !allAgreed;
        setAllAgreed(newValue);
        setServiceAgreed(newValue);
        setPrivacyAgreed(newValue);
    };

    const handleSubmit = () => {
        if (serviceAgreed && privacyAgreed) {
            setAgreed(true);
            navigate('/Signup');
        } else {
            alert('모든 필수 항목에 동의해주세요.');
        }
    };

    return (
        <div className="privacy-agreement">
            <h1>회원가입</h1>
            <p>AIrport 이용약관에 동의 해주세요</p>
            <div className="checkbox-group">
                <input
                    type="checkbox"
                    checked={allAgreed}
                    onChange={handleAllAgreeChange}
                />
                <label>모두 동의합니다.</label>
            </div>
            <div className="checkbox-group">
                <input
                    type="checkbox"
                    checked={serviceAgreed}
                    onChange={() => setServiceAgreed(!serviceAgreed)}
                />
                <label>[필수] AIrport 서비스 이용약관 동의</label>
            </div>
            <div className="scroll-box">
                <p>여러분을 환영합니다. AIrport 서비스 및 제품을 이용해 주셔서 감사합니다. 본 약관은 다양한 AIrport 서비스의 이용과 관련하여 AIrport 서비스 제공하는 회사(이하
                    ‘AIrport’)의 이용하는 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 여러분의 AIrport 서비스 이용에 도움을 드리고자 마련되었습니다.</p>
            </div>
            <div className="checkbox-group">
                <input
                    type="checkbox"
                    checked={privacyAgreed}
                    onChange={() => setPrivacyAgreed(!privacyAgreed)}
                />
                <label>[필수] 개인정보 수집 및 이용 동의</label>
            </div>
            <div className="scroll-box">
                <p>개인정보보호법에 따라 AIrport에 회원가입을 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부 권리 및 불이익에
                    관한 사항을 안내 드립니다. 다음의 내용을 자세히 읽은 후 동의 여부를 결정해 주시기 바랍니다.</p>
            </div>
            <p>관리자 대상 회원가입 가능합니다.</p>
            <button className='agree-button' onClick={handleSubmit}>동의하고 진행하기</button>
        </div>
    );
}

export default PrivacyAgreement;
