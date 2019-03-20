import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
    componentDidUpdate() {
        document.body.scrollTop = 0;
    }
  
    render() {
      return (
          <div style={{display:'none'}}>
              {this.props.location.pathname}
          </div>
      )
    }
  }
  
  export default withRouter(ScrollToTop)