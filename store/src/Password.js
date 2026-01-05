import React from 'react';

const App = () => {
  // Inline styles derived from the CSS provided
  const styles = {
    global: {
      margin: 0,
      padding: 0,
      fontFamily: "'Poppins', sans-serif",
    },
    body: {
      backgroundColor: '#ff99f5',
      backgroundImage: `
        radial-gradient(at 61% 4%, hsla(303, 91%, 61%, 1) 0px, transparent 50%),
        radial-gradient(at 75% 66%, hsla(196, 91%, 79%, 1) 0px, transparent 50%),
        radial-gradient(at 98% 88%, hsla(76, 87%, 78%, 1) 0px, transparent 50%),
        radial-gradient(at 23% 16%, hsla(238, 96%, 77%, 1) 0px, transparent 50%),
        radial-gradient(at 95% 65%, hsla(13, 91%, 75%, 1) 0px, transparent 50%),
        radial-gradient(at 10% 79%, hsla(228, 96%, 69%, 1) 0px, transparent 50%),
        radial-gradient(at 85% 58%, hsla(328, 81%, 68%, 1) 0px, transparent 50%);
      `,
      backgroundRepeat: 'no-repeat',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24rem 0',
    },
    card: {
      backdropFilter: 'blur(16px) saturate(180%)',
      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.125)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px 40px',
    },
    lockIcon: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '1.5rem',
      marginTop: '10px',
      textTransform: 'uppercase',
    },
    p: {
      fontSize: '12px',
    },
    passInput: {
      marginTop: '15px',
      width: '80%',
      background: 'transparent',
      border: 'none',
      borderBottom: '2px solid deepskyblue',
      fontSize: '15px',
      color: 'white',
      outline: 'none',
    },
    button: {
      marginTop: '15px',
      width: '80%',
      backgroundColor: 'deepskyblue',
      color: 'white',
      padding: '10px',
      textTransform: 'uppercase',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.card}>
        <p style={styles.lockIcon}>
          <i className="fas fa-lock"></i>
        </p>
        <h2 style={styles.h2}>Forgot Password?</h2>
        <p style={styles.p}>You can reset your password here</p>
        <input
          type="text"
          style={styles.passInput}
          placeholder="Email address"
        />
        <button style={styles.button}>Send My Password</button>
      </div>
    </div>
  );
};

export default Password;
