// components/Signup.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = ({ agreed }) => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [selectedUserType, setSelectedUserType] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (!agreed) {
            navigate('/PrivacyAgreement');
        }
    }, [agreed, navigate]);

    const toggleUserType = (type) => {
        setSelectedUserType(type);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password1 !== password2) {
            setPasswordError('비밀번호가 일치하지 않습니다.');
            return;
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password1)) {
            setPasswordError('비밀번호는 최소 8자, 문자, 숫자, 특수문자를 포함해야 합니다.');
            return;
        }

        setPasswordError('');
        // 회원가입 처리 로직
    };

    return (
        <div className="signup-container">
            <h1 className="signup-title">Signup</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <i className="fas fa-user" />
                    <input type="text" placeholder="Enter your ID/Email" className="signup-input" />
                    <button type="button" className="availability-button">Check Availability</button>
                </div>

                <div className="form-group">
                    <i className="fas fa-lock" />
                    <input
                        type={showPassword1 ? "text" : "password"}
                        placeholder="Enter your password"
                        className="signup-input"
                        value={password1}
                        onChange={(e) => setPassword1(e.target.value)}
                    />
                    <button
                        type="button"
                        className="show-hide-button"
                        onClick={() => setShowPassword1(!showPassword1)}
                    >
                        {showPassword1 ? "hide" : "show"}
                    </button>
                </div>

                <div className="form-group">
                    <i className="fas fa-lock" />
                    <input
                        type={showPassword2 ? "text" : "password"}
                        placeholder="Check your password"
                        className="signup-input"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                    <button
                        type="button"
                        className="show-hide-button"
                        onClick={() => setShowPassword2(!showPassword2)}
                    >
                        {showPassword2 ? "hide" : "show"}
                    </button>
                </div>

                {passwordError && <p className="error-message">{passwordError}</p>}

                <div className="form-group">
                    <i className="fas fa-user" />
                    <input type="text" placeholder="Enter your name" className="signup-input" />
                </div>

                <div className="form-group">
                    <i className="fas fa-phone" />
                    <input type="text" placeholder="Enter your phone number" className="signup-input" />
                </div>


                <button type="submit" className="signup-button">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
