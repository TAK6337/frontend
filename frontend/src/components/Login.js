import React, {useState}from 'react';
import '../styles/Login.css';

function Login() {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <div className="login-page">
            <div className="full">

                <a href='/'>
                    <img className="logo" src="/images/main_logo.png"/>
                </a>
                <div className="login-main">
                    <div className="sign-in-2">Login</div>
                    <div className="login-frame">
                        <div className="input">
                            <div className="id">
                                <img className="user-alt-light" src="/images/human_icon.png" alt='dd' />
                                <input className="label"
                                    type="text"
                                    placeholder="Enter your ID or Email"
                                />

                            </div>
                            <div className="pw">
                                <div className="frame-386">
                                    <div className="lock-light">
                                        <img className="user-alt-light" src="/images/Lock_icon.png"/>
                                    </div>
                                    <input
                                        className="label"
                                        type={passwordVisible ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <button className="show" onClick={togglePasswordVisibility}>
                                    <img className="group-1" src="/images/eye_icon.png"/>
                                    <div className="hide">show</div>
                                </button>
                            </div>
                            <a href='#' className="login-button">
                                <img className="add" src="/images/login_button_add.png"/>
                                <span className="sign-up">Login</span>
                            </a>
                        </div>
                        <div className="find">
                            <a href='#' className="other-issue-with-sign-in">find your ID/Email</a>
                            <a href='#' className="forget-your-password">find your password</a>
                        </div>
                        <div className="social">
                            <a href='#' className="google">
                                <img className="logo-googleg-48-dp" src="/images/google_icon.png"/>
                                <span className="label-22">Continue with Google</span>
                            </a>
                            <a href='#' className="kakao">
                                <img className="kakao-1" src="/images/kakao_icon.png"/>
                                <span className="label-22">Continue with Kakao</span>
                            </a>
                            <a href='#' className="naver">
                                <img className="btn-g-icon-square-1" src="/images/naver_icon.png"/>
                                <span className="label-23">Continue with Naver</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="divider">
                    <img className="divider-2" src="/images/divider.png"/>
                    <div className="or">New to our community</div>
                    <img className="divider-3" src="/images/divider.png"/>
                </div>
                <a href='#' className="to-signup">
                    <div className="sign-up-2">
        <span>
          <span className="sign-up-2-span">Don’t have an account? </span>
          <span className="sign-up-2-span2">Singup </span>
          <span className="sign-up-2-span3">now</span>
        </span>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Login;
