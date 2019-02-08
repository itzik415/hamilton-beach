import React, { Component } from 'react';
import { getServiceLocations } from '../../Redux/actions';
import { connect } from 'react-redux';
// import { store } from '../../Redux/store';


class ServiceLocations extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getServiceLocations());
    }
    render() {
        if(this.props.serviceLocationsList.length > 0) {

            console.log(this.props.serviceLocationsList['0'].phonenumber.toString().length);
        }
        return (
            <div className="serviceLocations">
                <h1 className="serviceLocations-title">נקודות שירות</h1>
                <p className="serviceLocations-para">.שרות מוצרים קטנים הנתמך במעבדה ראשית ומחסן חלפים במרכז הלוגיסטי באשדוד ויותר מ-20 מעבדות שרות בפריסה ארצית</p>
                <div className="serviceLocations-chart">
                    <div className="serviceLocations-chart-header">
                        <h1>טלפון</h1>
                        <h1>כתובת</h1>
                        <h1>עיר</h1>
                        <h1>שם</h1>
                    </div>
                    {
                        // console.log(this.props.serviceLocationsList)
                        this.props.serviceLocationsList.map( place => {
                            return (
                                <div className="serviceLocations-chart-line" key={place.id}>
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
        )
    }
}

const mapStateToProps = state => {
    return {
        serviceLocationsList: state.serviceLocationsList
    }
}

export default connect(mapStateToProps, null)(ServiceLocations);