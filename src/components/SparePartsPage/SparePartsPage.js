import React, { Component } from 'react';
// import { getServiceLocations } from '../../Redux/actions';
import { connect } from 'react-redux';

class SpareParts extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.dispatch(getServiceLocations());
    }
    render() {
        return (
            <div className="spareParts">
                <div className="spareParts__section">
                    <p className="spareParts__section-type">תמיכה</p>
                    <h1 className="spareParts__section-title">חלקי חילוף</h1>
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

export default connect(null, null)(SpareParts);