import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/Signup.css';

const Signup = ({ agreed }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!agreed) {
            navigate('/PrivacyAgreement');
        }
    }, [agreed, navigate]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');  // 입력 중일 때는 에러 메시지 제거
    };

    const handleEmailBlur = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            setEmailError('올바른 이메일 형식이 아닙니다.');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword1(e.target.value);
        setPasswordError('');  // 입력 중일 때는 에러 메시지 제거
    };

    const handlePasswordBlur = () => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (password1 && !passwordRegex.test(password1)) {
            setPasswordError('비밀번호는 최소 8자, 문자, 숫자, 특수문자를 포함해야 합니다.');
        } else {
            setPasswordError('');
        }
    };

    const handlePassword2Change = (e) => {
        setPassword2(e.target.value);
        setPasswordMatchError('');  // 입력 중일 때는 에러 메시지 제거
    };

    const handlePassword2Blur = () => {
        if (password2 && password1 !== password2) {
            setPasswordMatchError('비밀번호가 일치하지 않습니다.');
        } else {
            setPasswordMatchError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 최종 검증
        handleEmailBlur();
        handlePasswordBlur();
        handlePassword2Blur();

        if (password1 !== password2) {
            setPasswordMatchError('비밀번호가 일치하지 않습니다.');
            return;
        }

        if (passwordError || passwordMatchError || emailError) {
            return;
        }

        // 회원가입 처리 로직
    };

    return (
        <div className="signup-full-container">
            <Link to="/">
                <img src="/images/main_logo.png" alt="AIrport 로고" className="signup-home-logo"/>
            </Link>
            <div className="signup-container">
                <h1 className="signup-title">회원가입</h1>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="input-label">아이디/이메일</label>
                        <div className="input-button-container">
                            <input
                                type="text"
                                placeholder="아이디/이메일 입력"
                                className="signup-input"
                                value={email}
                                onChange={handleEmailChange}
                                onBlur={handleEmailBlur}
                            />
                            <button type="button" className="availability-button">중복확인</button>
                        </div>
                        <div className="error-message-container">
                            {emailError && <p className="error-message">{emailError}</p>}
                        </div>
                    </div>


                    <div className="form-group">
                        <label className="input-label">비밀번호</label>
                        <input
                            type={showPassword1 ? "text" : "password"}
                            placeholder="비밀번호 입력"
                            className="signup-input"
                            value={password1}
                            onChange={handlePasswordChange}
                            onBlur={handlePasswordBlur}
                        />
                        <button
                            type="button"
                            className="show-hide-button"
                            onClick={() => setShowPassword1(!showPassword1)}
                        >
                            {showPassword1 ? <FaEyeSlash/> : <FaEye/>}
                        </button>
                        <div className="error-message-container">
                            {passwordError && <p className="error-message">{passwordError}</p>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="input-label">비밀번호 확인</label>
                        <input
                            type={showPassword2 ? "text" : "password"}
                            placeholder="비밀번호 확인"
                            className="signup-input"
                            value={password2}
                            onChange={handlePassword2Change}
                            onBlur={handlePassword2Blur}
                        />
                        <button
                            type="button"
                            className="show-hide-button"
                            onClick={() => setShowPassword2(!showPassword2)}
                        >
                            {showPassword2 ? <FaEyeSlash/> : <FaEye/>}
                        </button>
                        <div className="error-message-container">
                            {passwordMatchError && <p className="error-message">{passwordMatchError}</p>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="input-label">이름</label>
                        <input
                            type="text"
                            placeholder="이름 입력"
                            className="signup-input"
                        />
                    </div>

                    {/*<div className="form-group">*/}
                    {/*    <label className="input-label">전화번호</label>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        placeholder="전화번호 입력"*/}
                    {/*        className="signup-input"*/}
                    {/*    />*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label className="input-label">성별</label>
                        <div className="gender-container">
                            <label className={`gender-box ${gender === "남" ? "selected" : ""}`}>
                                <input
                                    type="radio"
                                    value="남"
                                    checked={gender === "남"}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="gender-input"
                                />
                                남성
                            </label>
                            <label className={`gender-box ${gender === "여" ? "selected" : ""}`}>
                                <input
                                    type="radio"
                                    value="여"
                                    checked={gender === "여"}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="gender-input"
                                />
                                여성
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="input-label">생년월일</label>
                        <input
                            type="date"
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                            className="signup-input"
                        />
                    </div>

                    <button type="submit" className="signup-button">회원가입</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;

