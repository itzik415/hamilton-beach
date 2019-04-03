import React, { Component } from 'react';
import { partHandle, openingForm } from '../../Redux/actions';
import { connect } from 'react-redux';

class PartPage extends Component {

    componentDidMount() {
        partHandle();
    }
    
    render() {
        if(this.props.chosenPart[0]) {
        return (
            <div className="partPage">
                <div className="partPage__section">
                    <h1 className="partPage__section-title">אביזר חלופי</h1>
                </div>
                <div className="partPage-main row">
                    <div className="partPage-main-details col-md-6 col-11">
                        <h1 className="card-item-title mb-5">המילטון ביץ׳ - {this.props.chosenPart[0].hebrew_name} </h1>
                        <div className="card-body d-flex flex-column align-items-start">
                            <p className="card-text-model text-secondary">דגם {this.props.chosenPart[0].part_model}#</p>
                            <p className="card-text-price">{`${this.props.chosenPart[0].price}₪`}</p>
                            <p className="card-text mb-5 ">משלוח בתוספת תשלום</p>
                            <button onClick={openingForm} name={this.props.chosenPart[0].part_model} id={this.props.chosenPart[0].product_model} value={this.props.chosenPart[0].part_model} className="add-to-cart-btn">הוסף לעגלה</button>
                        </div>  
                    </div>
                    <img 
                        className="col-xl-4 col-md-6 col-10" 
                        src={this.props.chosenPart[0].image_url} 
                        alt={this.props.chosenPart[0].part_model}/>
                    <div className="col-xl-2 col-0"></div>
                </div>
            </div>
        )}
        else {
            return null;
        }
    }
}

const mapStateToProps = state => {
    return {
        serviceLocationsList: state.serviceLocationsList,
        chosenPart: state.chosenPart
    }
}

export default connect(mapStateToProps, null)(PartPage);