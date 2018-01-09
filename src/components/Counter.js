import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  constructor(props){
    super(props);
  }
  render(){
    let score = this.props.count == 0 ? '' : 'Score is: ' + this.props.count
    return (
      <h1>{score}</h1>
    )
  }
}
function mapStateToProps(state){
  return {
    count: state.counterReducer,
  };
}
export default connect(mapStateToProps)(Counter);
