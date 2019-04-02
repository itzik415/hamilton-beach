import React, { Component } from 'react';
import { processPayment } from '../../Redux/actions';

class ProcessPayment extends Component {

    componentDidMount() {
        processPayment()
    }

    render() {
        return (
            <div className="processPayment">
                <div className="processPayment-div">
                    <h1 className="processPayment-div-title">טוען את הבקשה אנא המתן</h1>
                    <img src="https://storage.googleapis.com/hamilton-beach-israel/different-images/Spinner.gif" alt="spinner" />
                </div>
            </div>
        )
    }
}

export default ProcessPayment;