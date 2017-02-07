'use strict';

var Question = React.createClass({
  selectFalsyAnswer: function selectFalsyAnswer() {
    this.props.selectAnswer(IS_FALSY);
  },
  selectTruthyAnswer: function selectTruthyAnswer() {
    this.props.selectAnswer(IS_TRUTHY);
  },
  render: function() {
    return (
      <div className="question">
        <h1 className="question-name">{this.props.question.name}</h1>
        <ul className="question-buttons">
          <li><button className="btn btn-lg btn-default question-button-truthy" onClick={this.selectTruthyAnswer}>truthy</button></li>
          <li><button className="btn btn-lg btn-default question-button-falsy" onClick={this.selectFalsyAnswer}>falsy</button></li>
        </ul>
      </div>
    )
  }
});

