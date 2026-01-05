import React from 'react';

function FormComponent() {
    // Define the styles as a JavaScript object
    const styles = {
        formboldMainWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px',
        },
        formboldFormWrapper: {
            margin: '0 auto',
            maxWidth: '570px',
            width: '100%',
            background: 'white',
            padding: '40px',
        },
        formboldImg: {
            marginBottom: '45px',
        },
        formboldFormTitle: {
            marginBottom: '30px',
        },
        formboldFormTitleH2: {
            fontWeight: 600,
            fontSize: '28px',
            lineHeight: '34px',
            color: '#07074d',
        },
        formboldFormTitleP: {
            fontSize: '16px',
            lineHeight: '24px',
            color: '#536387',
            marginTop: '12px',
        },
        formboldInputFlex: {
            display: 'flex',
            gap: '20px',
            marginBottom: '15px',
        },
        formboldInputFlexDiv: {
            width: '50%',
        },
        formboldFormInput: {
            textAlign: 'center',
            width: '100%',
            padding: '13px 22px',
            borderRadius: '5px',
            border: '1px solid #dde3ec',
            background: '#ffffff',
            fontWeight: 500,
            fontSize: '16px',
            color: '#536387',
            outline: 'none',
        },
        formboldFormInputFocus: {
            borderColor: '#6a64f1',
            boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.05)',
        },
        finalForm: {
            color: '#536387',
            fontSize: '14px',
            lineHeight: '24px',
            display: 'block',
            marginBottom: '10px',
        },
        formboldCheckboxWrapper: {
            display: 'flex',
            cursor: 'pointer',
            userSelect: 'none',
            fontSize: '16px',
            lineHeight: '24px',
            color: '#536387',
        },
        formboldCheckboxLabelA: {
            marginLeft: '5px',
            color: '#6a64f1',
        },
        formboldInputCheckbox: {
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: '0',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0 0 0 0)',
            whiteSpace: 'nowrap',
            borderWidth: '0',
        },
        formboldCheckboxInner: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20px',
            height: '20px',
            marginRight: '16px',
            marginTop: '2px',
            border: '0.7px solid #dde3ec',
            borderRadius: '3px',
        },
        formboldOpacity0: {
            opacity: 0,
        },
        formboldStrokeCurrent: {
            stroke: 'currentColor',
        },
        formboldBtn: {
            fontSize: '16px',
            borderRadius: '5px',
            padding: '14px 25px',
            border: 'none',
            fontWeight: 500,
            backgroundColor: '#6a64f1',
            color: 'white',
            cursor: 'pointer',
            marginTop: '25px',
        },
        formboldBtnHover: {
            boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.05)',
        },
    };

    return (
        <div style={styles.formboldMainWrapper}>
            <div style={styles.formboldFormWrapper}>
                <img src="your-image-url-here.jpg" alt="Form Image" style={styles.formboldImg} />

                <div style={styles.formboldFormTitle}>
                    <h2 style={styles.formboldFormTitleH2}>Register now</h2>
                    <p style={styles.formboldFormTitleP}>
                        Discover exclusive styles! Sign up now for access to limited editions and special offers.
                    </p>
                </div>

                <div style={styles.formboldInputFlex}>
                    <div style={styles.formboldInputFlexDiv}>
                        <label htmlFor="firstname" style={styles.finalForm}>
                            First name
                        </label>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            style={styles.formboldFormInput}
                        />
                    </div>
                    <div style={styles.formboldInputFlexDiv}>
                        <label htmlFor="lastname" style={styles.finalForm}>
                            Last name
                        </label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            style={styles.formboldFormInput}
                        />
                    </div>
                </div>

                <div style={styles.formboldInputFlex}>
                    <div style={styles.formboldInputFlexDiv}>
                        <label htmlFor="email" style={styles.finalForm}>
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            style={styles.formboldFormInput}
                        />
                    </div>
                    <div style={styles.formboldInputFlexDiv}>
                        <label htmlFor="phone" style={styles.finalForm}>
                            Phone number
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            style={styles.formboldFormInput}
                        />
                    </div>
                </div>

                <div style={styles.formboldMb3}>
                    <label htmlFor="address" style={styles.finalForm}>
                        Street Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        style={styles.formboldFormInput}
                    />
                </div>

                <div style={styles.formboldMb3}>
                    <label htmlFor="address2" style={styles.finalForm}>
                        Street Address Line 2
                    </label>
                    <input
                        type="text"
                        name="address2"
                        id="address2"
                        style={styles.formboldFormInput}
                    />
                </div>

                <div style={styles.formboldInputFlex}>
                    <div style={styles.formboldInputFlexDiv}>
                        <label htmlFor="state" style={styles.finalForm}>
                            State/Province
                        </label>
                        <input
                            type="text"
                            name="state"
                            id="state"
                            style={styles.formboldFormInput}
                        />
                    </div>
                    <div style={styles.formboldInputFlexDiv}>
                        <label htmlFor="country" style={styles.finalForm}>
                            Country
                        </label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            style={styles.formboldFormInput}
                        />
                    </div>
                </div>

                <div style={styles.formboldInputFlex}>
                    <div style={styles.formboldInputFlexDiv}>
                        <label htmlFor="post" style={styles.finalForm}>
                            Post/Zip code
                        </label>
                        <input
                            type="text"
                            name="post"
                            id="post"
                            style={styles.formboldFormInput}
                        />
                    </div>
                    <div style={styles.formboldInputFlexDiv}>
                        <label htmlFor="area" style={styles.finalForm}>
                            Area Code
                        </label>
                        <input
                            type="text"
                            name="area"
                            id="area"
                            style={styles.formboldFormInput}
                        />
                    </div>
                </div>

                <div style={styles.formboldCheckboxWrapper}>
                    <label htmlFor="supportCheckbox" style={styles.formboldCheckboxLabel}>
                        <div style={styles.formboldRelative}>
                            <input
                                type="checkbox"
                                id="supportCheckbox"
                                style={styles.formboldInputCheckbox}
                            />
                            <div style={styles.formboldCheckboxInner}>
                                <span style={styles.formboldOpacity0}>
                                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" style={styles.formboldStrokeCurrent}>
                                        <path
                                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                            strokeWidth="0.4"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        I agree to the defined <a href="#">terms, conditions, and policies</a>
                    </label>
                </div>

                <button style={styles.formboldBtn}>
                    Register Now
                </button>
            </div>
        </div>
    );
}

export default Signup;
