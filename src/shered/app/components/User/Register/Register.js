import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changingForm, handleSubmitRegister } from '../../../Redux/actions';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            display: 'none'
        }
    }
    
    passwordlength(e) {
        e.target.value.length < 6 && e.target.value.length !== 0?
        this.setState({display: 'flex'}):
        this.setState({display: 'none'})
    }

    render() {     

        const style ={
            height: '35px',
            width: "65%",
            margin: '15px auto',
        }

        return (
            <form className="register" onSubmit={handleSubmitRegister} style={{display: `${this.props.registerDisplay}`}}>
                <img className="register-logo" style={style}src={require(`../../../images/logo-black.png`)}  alt="company logo" />
                <div className="register-email">
                    <input 
                        className="register-email-input" 
                        type="email" 
                        name="email" 
                        minLength="6"
                        placeholder="דוא״ל"
                        required/>
                    <ion-icon id="email-icon" name="mail"></ion-icon>
                    <p className="register-email-text">דוא״ל</p>
                </div>
                <div className="register-name">
                    <input 
                        className="register-name-input" 
                        type="text" 
                        name="name" 
                        placeholder="שם מלא"
                        required/>
                    <ion-icon id="name-icon" name="person"></ion-icon>
                    <p className="register-name-text">שם מלא</p>
                </div>
                <div className="register-lock">
                    <input 
                        className="register-lock-input" 
                        type="password" 
                        name="password" 
                        placeholder="סיסמה"
                        onChange={(e) => this.passwordlength(e)}
                        minLength="6"
                        maxLength="12"
                        required/>
                    <ion-icon id="lock-icon" name="lock"></ion-icon>
                    <p className="register-lock-text">סיסמה</p>
                </div>
                <p className="register-passwordAlert" style={{display: this.state.display}}>הסיסמה חייבת להכיל בין 6 ל - 12 תווים</p>
                <div className="register-lock">
                    <input 
                        className="register-lock-input" 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="אישור סיסמה"
                        minLength="6"
                        maxLength="12"
                        required/>
                    <ion-icon id="lock-icon" name="aperture"></ion-icon>
                    <p className="register-lock-text">אישור סיסמה</p>
                </div>
                <div className="register-message alert alert-danger" style={{display: `${this.props.errorMessage}`}} role='alert'>האימייל שהזנת קיים במערכת</div>
                <div className="register-message alert alert-danger" style={{display: `${this.props.passwordError}`}} role='alert'>הסיסמאות אינן תואמות</div>
                <div className="register-footer">
                    <button onClick={changingForm} type="button" className="register-footer-register">חזור</button>
                    <button type="submit" className="register-footer-sign">הרשמה</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        registerDisplay: state.form.registerDisplay,
        errorMessage: state.form.registerError,
        passwordError: state.form.passwordError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changingForm: () => dispatch(changingForm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);




