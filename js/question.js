'use strict';

var Question = React.createClass({displayName: "Question",
  selectTruthyAnswer: function selectTruthyAnswer() {
    this.props.selectAnswer(IS_TRUTHY);
  },
  selectFalsyAnswer: function selectFalsyAnswer() {
    this.props.selectAnswer(IS_FALSY);
  },
  selectErrorAnswer: function selectErrorAnswer() {
    this.props.selectAnswer(IS_ERROR);
  },
  render: function() {
    return (
      React.createElement("div", {className: "question"}, 
        React.createElement("header", null, 
          "$ ruby -v" + ' ' +
          "#=> ruby 2.5.0preview1 (2017-10-10 trunk 60153)", 
          React.createElement("br", null), 
          "$ irb", 
          React.createElement("br", null), 
          "irb(main):001:0>"
        ), 
        React.createElement("h1", {className: "question-name"}, this.props.question.name), 
        React.createElement("ul", {className: "question-buttons"}, 
          React.createElement("li", null, React.createElement("button", {className: "btn btn-lg btn-default question-button-truthy", onClick: this.selectTruthyAnswer}, "truthy")), 
          React.createElement("li", null, React.createElement("button", {className: "btn btn-lg btn-default question-button-falsy", onClick: this.selectFalsyAnswer}, "falsy")), 
          React.createElement("li", null, React.createElement("button", {className: "btn btn-lg btn-default question-button-error", onClick: this.selectErrorAnswer}, "error"))
        )
      )
    )
  }
});

