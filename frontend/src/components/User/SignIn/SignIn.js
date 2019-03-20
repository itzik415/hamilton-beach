import React from 'react';
import { connect } from 'react-redux';
import { changingForm, handleSubmitSignin } from '../../../Redux/actions';

const signIn = (props) => {
    const style ={
        height: '35px',
        width: "65%",
        margin: '15px auto',
    }

    return (
        <form className="signIn" onSubmit={handleSubmitSignin} style={{display: `${props.signInDisplay}`}}>
            <img className="signIn-logo" style={style}src={require(`../../../images/logo-black.png`)}  alt="company logo" />
            <div className="signIn-email">
                <input 
                    className="signIn-email-input" 
                    type="email" 
                    name="email" 
                    placeholder="דוא״ל"
                    required/>
                <ion-icon id="email-icon" name="mail"></ion-icon>
                <p className="signIn-email-text">דוא״ל</p>
            </div>
            <div className="signIn-lock">
                <input 
                    className="signIn-lock-input" 
                    type="password" 
                    name="password" 
                    placeholder="סיסמה"
                    required/>
                <ion-icon id="lock-icon" name="lock"></ion-icon>
                <p className="signIn-lock-text">סיסמה</p>
            </div>
            <div id="signinError" className="signIn-message alert alert-danger" style={{display: `${props.errorMessage}`}}role='alert'>האימייל או הסיסמה אינם תואמים</div>
            <div className="signIn-footer">
                <button type="submit" className="signIn-footer-sign">כניסה</button>
                <button onClick={changingForm} type="button" className="signIn-footer-register">להרשמה</button>
            </div>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signInDisplay: state.form.signInDisplay,
        errorMessage: state.form.error,
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         // changingForm: () => dispatch(changingForm()),
//         // signInSuccess: () => dispatch(signInSuccess())
//     }
// }

export default connect(mapStateToProps, null)(signIn);




