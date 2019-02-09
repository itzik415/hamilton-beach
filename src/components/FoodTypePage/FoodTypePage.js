import React, { Component } from 'react';
// import { getServiceLocations } from '../../Redux/actions';
import { connect } from 'react-redux';

class FoodType extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.dispatch(getServiceLocations());
    }
    render() {
        return (
            <div className="foodType">
                <div className="foodType__section">
                    <p className="foodType__section-type">מהמטבח שלנו</p>
                    <h1 className="foodType__section-title">מתכונים טבעוניים</h1>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         serviceLocationsList: state.serviceLocationsList
//     }
// }

export default connect(null, null)(FoodType);