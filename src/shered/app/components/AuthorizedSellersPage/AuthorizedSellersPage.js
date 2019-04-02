import React, { Component } from 'react';
import { getAuthorizedStores } from '../../Redux/actions';
import { connect } from 'react-redux';

class AuthorizedSellers extends Component {

    componentDidMount() {
        this.props.dispatch(getAuthorizedStores());
    }
    render() {
        return (
            <div className="authorizedSellers">
                <div className="authorizedSellers__section">
                    <h1 className="authorizedSellers__section-title">משווקים מורשים</h1>
                </div>
                <div className="authorizedSellers-main">
                    <div className="authorizedSellers-main-chart">
                        <div className="authorizedSellers-main-chart-header">
                            <h1>עיר</h1>
                            <h1>כתובת</h1>
                            <h1>שם</h1>
                            <h1>טלפון</h1>
                        </div>
                        <div>
                            {
                                this.props.authorizedStoresList.map(place => {
                                    return (
                                        <div className="authorizedSellers-main-chart-line" key={place.id}>
                                            <p>{place.name}</p>
                                            <p>{place.address}</p>
                                            <p>{place.city}</p>
                                            <p>{place.phonenumber.toString().length === 8 ? 
                                                `0${place.phonenumber.toString().slice(0,1)}-${place.phonenumber.toString().slice(1)}` :
                                                `0${place.phonenumber.toString().slice(0,2)}-${place.phonenumber.toString().slice(2)}`}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authorizedStoresList: state.authorizedStores
    }
}

export default connect(mapStateToProps, null)(AuthorizedSellers);