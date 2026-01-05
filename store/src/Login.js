import React, { useState } from 'react';

const App = () => {
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form submission logic here
    };

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    const redirectToForgotPassword = () => {
        window.location.href = 'password.html';
    };

    const redirectToSignUp = () => {
        window.location.href = 'signup.html';
    };

    // Inline styles
    const styles = {
        body: {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '40px',
            paddingBottom: '40px',
            backgroundColor: '#f5f5f5',
        },
        bg: {
            position: 'absolute',
            zIndex: '-1',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: 'radial-gradient(circle at 30% 86%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 8%, transparent 8%, transparent 92%), radial-gradient(circle at 55% 100%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 8%, transparent 8%, transparent 92%), radial-gradient(circle at 40% 75%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 6%, transparent 6%, transparent 94%), radial-gradient(circle at 7% 99%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 6%, transparent 6%, transparent 94%), radial-gradient(circle at 69% 76%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 6%, transparent 6%, transparent 94%), radial-gradient(circle at 2% 35%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 6%, transparent 6%, transparent 94%), radial-gradient(circle at 14% 48%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 6%, transparent 6%, transparent 94%), radial-gradient(circle at 28% 87%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 4%, transparent 4%, transparent 96%), radial-gradient(circle at 65% 14%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 4%, transparent 4%, transparent 96%), radial-gradient(circle at 51% 36%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 4%, transparent 4%, transparent 96%), radial-gradient(circle at 6% 93%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 4%, transparent 4%, transparent 96%), linear-gradient(135deg, #17e9ad, #1d18d0)',
        },
        formSignin: {
            width: '100%',
            maxWidth: '330px',
            margin: 'auto',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '5px 5px 30px rgba(0, 0, 0, 0.2)',
            borderRadius: '3px',
        },
        formSigninH1: {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '5px 5px 30px rgba(0, 0, 0, 0.2)',
            marginTop: '0px',
            borderTopLeftRadius: '3px',
            borderTopRightRadius: '3px',
            color: '#fff',
            padding: '15px',
            textAlign: 'center',
        },
        form: {
            padding: '15px',
        },
        button: {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '5px 5px 30px rgba(0, 0, 0, 0.2)',
            color: '#fff',
            width: '100%',
            padding: '10px 0',
            fontSize: '1rem',
        },
        buttonHover: {
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: 'none',
        },
        input: {
            background: 'rgba(255, 255, 255, 0.9)',
        },
        copyright: {
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.65)',
        },
        formCheck: {
            display: 'flex',
            alignItems: 'center',
            color: 'rgba(255, 255, 255, 0.65)',
        },
        formCheckLabel: {
            fontSize: '0.9em',
        },
        formCheckInput: {
            marginRight: '0.5em',
        },
    };

    return (
        <div style={styles.body}>
            <div style={styles.bg}></div>

            <main style={styles.formSignin}>
                <h1 style={styles.formSigninH1}>Login</h1>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            required
                            style={styles.input}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            required
                            style={styles.input}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value="1"
                                name="remember_me"
                                id="rememberMeSwitch"
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                                style={styles.formCheckInput}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="rememberMeSwitch"
                                style={styles.formCheckLabel}
                            >
                                Remember me
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        style={styles.button}
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={redirectToForgotPassword}
                        style={styles.button}
                    >
                        Forgot Password
                    </button>
                    <button
                        type="button"
                        onClick={redirectToSignUp}
                        style={styles.button}
                    >
                        Sign up
                    </button>
                </form>
                <p style={styles.copyright}>&copy; Fashion</p>
            </main>
        </div>
    );
};

export default Login1;
