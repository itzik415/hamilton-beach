import React from 'react';
import HiddenNav from './HiddenNav/HiddenNav';
import NavBar from './NavBar/NavBar';
import { connect } from 'react-redux';
import SignIn from '../../User/SignIn/SignIn';
import Register from '../../User/Register/Register';
import { closingSignForm } from '../../../Redux/actions';

const nav = (props) => {
    return (
        <div className="nav">
            <HiddenNav />
            <NavBar />
            <div className="nav-signInForm" style={{display: `${props.formDisplay}`}}>
                <div className="nav-signInForm-content">
                    <div className="nav-signInForm-content-header">
                        <span onClick={props.closingForm} className="nav-signInForm-content-header-close">&times;</span>
                        {/* <h2 className="nav-signInForm-content-header-title">התחברות והרשמה</h2> */}
                    </div>
                    <div className="nav-signInForm-content-body">
                        <SignIn />
                        <Register />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        formDisplay: state.form.display
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closingForm: () => dispatch(closingSignForm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(nav);