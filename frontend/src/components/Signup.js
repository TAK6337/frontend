import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import '../styles/Signup.css';

const Signup = ({agreed}) => {
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordMatchError, setPasswordMatchError] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [notRobot, setNotRobot] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!agreed) {
            navigate('/PrivacyAgreement');
        }
    }, [agreed, navigate]);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        setUsernameError('');  // 입력 중일 때는 에러 메시지 제거
    };

    const handleUsernameBlur = () => {
        const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
        if (username && !usernameRegex.test(username)) {
            setUsernameError('아이디는 3~16자의 영문, 숫자, 밑줄, 하이픈만 가능합니다.');
        } else {
            setUsernameError('');
        }
    };

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

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        setPhoneError('');
    };

    const handlePhoneBlur = () => {
        const phoneRegex = /^01[016789]-\d{3,4}-\d{4}$/;
        if (phone && !phoneRegex.test(phone)) {
            setPhoneError('올바른 전화번호 형식이 아닙니다.');
        } else {
            setPhoneError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 최종 검증
        handleUsernameBlur();
        handleEmailBlur();
        handlePasswordBlur();
        handlePassword2Blur();
        handlePhoneBlur();

        if (usernameError || emailError || passwordError || passwordMatchError || phoneError || !notRobot) {

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
                        <label className="input-label">아이디 입력</label>
                        <input
                            type="text"
                            placeholder="아이디를 입력해주세요."
                            className="signup-input"
                            value={username}
                            onChange={handleUsernameChange}
                            onBlur={handleUsernameBlur}
                        />
                        <div className="error-message-container">
                            {usernameError && <p className="error-message">{usernameError}</p>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="input-label">이메일 입력</label>
                        <div className="input-button-container">
                            <input
                                type="text"
                                placeholder="이메일을 입력해주세요."
                                className="signup-input"
                                value={email}
                                onChange={handleEmailChange}
                                onBlur={handleEmailBlur}
                            />
                            <button type="button" className="availability-button">이메일 인증</button>
                        </div>
                        <div className="error-message-container">
                            {emailError && <p className="error-message">{emailError}</p>}
                        </div>

                    </div>

                    <div className="form-group">
                        <label className="input-label">비밀번호 입력</label>
                        <input
                            type={showPassword1 ? "text" : "password"}
                            placeholder="비밀번호를 입력해주세요."
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
                            placeholder="비밀번호를 다시 입력해주세요.   "
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
                        <label className="input-label">이름 입력</label>
                        <input
                            type="text"
                            placeholder="이름을 입력해주세요."
                            className="signup-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="input-label">전화번호 입력</label>
                        <div className="input-button-container">
                            <input
                                type="text"
                                placeholder="전화번호를 입력해주세요."
                                className="signup-input"
                                value={phone}
                                onChange={handlePhoneChange}
                                onBlur={handlePhoneBlur}
                            />
                            <button type="button" className="availability-button">전화번호 인증</button>
                        </div>
                        <div className="error-message-container">
                            {phoneError && <p className="error-message">{phoneError}</p>}
                        </div>
                    </div>

                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                checked={notRobot}
                                onChange={(e) => setNotRobot(e.target.checked)}
                            />
                            로봇이 아닙니다.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="signup-button"
                        disabled={!username || !email || !password1 || !password2 || !phone || !notRobot}
                    >
                        <span>회원가입</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
