import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addName, addCount } from '../actions';
import { bindActionCreators } from 'redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    this.props.dispatch(addName(username));
    this.props.dispatch(addCount(0));
    this.props.history.push('/assessment');
  }

   render() {
     return (
        <div className="content">
          <input placeholder="Enter your name..." id="username" />
          <button className="submit" onClick={this.handleSubmit}>Add Name</button>
        </div>
     )
   }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({addName, addCount}, dispatch) }
}
export default connect(mapDispatchToProps)(Home);
