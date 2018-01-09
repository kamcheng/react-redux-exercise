import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCount} from '../actions';
import { bindActionCreators } from 'redux';

import ListItem from './ListItem.js';
import questionSetting from '../questionSetting.js';

const questions = questionSetting;
const length = questions.length;

class Assessment extends Component {
  constructor(props) {
    super(props);
    this.handleCheckAnswer = this.handleCheckAnswer.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      id : 0,
      step : 1,
      finished: false
    }
  }

  handleBack() {
    let id = this.state.id == 0 ? 0 : this.state.id - 1;
    this.setState({
      id: id,
      step: this.state.step - 1,
      finished: false
    });
  }

  handleSubmit() {
    let score=0;
    for(let i=0; i<length; i++) {
      if(questions[i].answer == questions[i].selected) {
        score += 1;
      }
    }
    this.props.dispatch(addCount(score));
    this.setState({
      finished: true
    });
    this.message = score > 2 ? 'Great Job!' : 'Not perfect but nice done.';
  }

  handleCheckAnswer(e) { 
    let answer = e.target.getAttribute('data-answer');
    if(questions[this.state.id] === undefined) return;

    questions[this.state.id].selected = answer;

    if(this.state.id != length-1) {
      this.setState({
        id: this.state.id + 1,
        step: this.state.step + 1
      });
    } else {
      this.handleSubmit();
    }
  }

   render() {
      let backBtnClass = this.state.step == 1 ? 'hidden' : 'backBtn';

      if(this.state.finished) {
        return (
          <div className="content">{this.message}</div>
        )
      } else {
        return (
          <div className="content">
              <h5>Step {this.state.step} of {length}</h5>
              <button onClick={this.handleBack} className={backBtnClass}></button>
              <h2>{questions[this.state.id].title}</h2>
              
              <ListItem onAnswerClick={this.handleCheckAnswer} choice={questions[this.state.id].choices} />
          </div>
       )
     }
   }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(addCount, dispatch) }
}
export default connect(mapDispatchToProps)(Assessment);
