import React, { Component } from 'react';
import { getServiceLocations } from '../../Redux/actions';
import { connect } from 'react-redux';

class ServiceLocations extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.dispatch(getServiceLocations());
    }
    render() {
        return (
            <div className="serviceLocations">
                <div className="serviceLocations__section">
                    <p className="serviceLocations__section-type">תמיכה</p>
                    <h1 className="serviceLocations__section-title">נקודות שירות</h1>
                </div>
                <div className="serviceLocations-main">
                    <p className="serviceLocations-main-para">.שרות מוצרים קטנים הנתמך במעבדה ראשית ומחסן חלפים במרכז הלוגיסטי באשדוד ויותר מ-20 מעבדות שרות בפריסה ארצית</p>
                    <div className="serviceLocations-main-chart">
                        <div className="serviceLocations-main-chart-header">
                            <h1>טלפון</h1>
                            <h1>כתובת</h1>
                            <h1>עיר</h1>
                            <h1>שם</h1>
                        </div>
                        {
                            this.props.serviceLocationsList.map(place => {
                                return (
                                    <div className="serviceLocations-main-chart-line" key={place.id}>
                                        <p>{place.phonenumber.toString().length === 8 ? 
                                            `0${place.phonenumber.toString().slice(1,2)}-${place.phonenumber.toString().slice(2)}` :
                                            `0${place.phonenumber.toString().slice(1,3)}-${place.phonenumber.toString().slice(3)}`}</p>
                                        <p>{place.address}</p>
                                        <p>{place.city}</p>
                                        <p>{place.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        serviceLocationsList: state.serviceLocationsList
    }
}

export default connect(mapStateToProps, null)(ServiceLocations);