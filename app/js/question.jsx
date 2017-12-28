'use strict';

var Question = React.createClass({
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
      <div className="question">
        <header>
          $ ruby -v
          #=&gt; ruby 2.5.0p0 (2017-12-25 trunk 61468) [x86_64-darwin16]
          <br/>
          $ irb
          <br/>
          irb(main):001:0&gt;
        </header>
        <h1 className="question-name">{this.props.question.name}</h1>
        <ul className="question-buttons">
          <li><button className="btn btn-lg btn-default question-button-truthy" onClick={this.selectTruthyAnswer}>truthy</button></li>
          <li><button className="btn btn-lg btn-default question-button-falsy" onClick={this.selectFalsyAnswer}>falsy</button></li>
          <li><button className="btn btn-lg btn-default question-button-error" onClick={this.selectErrorAnswer}>error</button></li>
        </ul>
      </div>
    )
  }
});

