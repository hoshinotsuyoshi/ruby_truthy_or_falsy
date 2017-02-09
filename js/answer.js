'use strict';

var Answer = React.createClass({displayName: "Answer",
  render: function() {
    var classes = classNames({
      'answer': true,
      'answer-correct bg-success': this.props.isAnswerCorrect,
      'answer-incorrect bg-danger': !this.props.isAnswerCorrect
    });
    var name = this.props.question.name;
    var text = this.props.question.text;
    var types = ['truthy', 'falsy', 'error'];
    var type = types[this.props.question.type];

    return (
      React.createElement("div", {className: classes}, 
        React.createElement("h1", {className: "answer-name"}, 
           name, " is ", type, "!"
        ), 
        React.createElement("pre", {className: "language-diff"}, 
            React.createElement("code", {className: "language-diff"}, 
               "irb(main):001:0> ", name, 
               React.createElement("br", null), 
               text
            )
        ), 
        React.createElement("div", {className: "answer-next"}, 
          React.createElement("button", {className: "btn btn-lg btn-primary answer-button-next", onClick: this.props.nextQuestion}, "Next question")
        )
      )
    )
  }
});

