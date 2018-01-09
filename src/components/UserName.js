import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserName extends Component {

  render(){
    let username = this.props.username == 0 ? '' : 'Welcome ' + this.props.username
    return (
      <h1>{username}</h1>
    )
  }
}
function mapStateToProps(state){
  return {
    username: state.userNameReducer,
  };
}
export default connect(mapStateToProps)(UserName);
