var React = require('react');

var MainMenu = require('./MainMenu');
var ControlPanel = React.createClass({
  render: function() {
    return (
      <div className="ReactContainer">
        <MainMenu data={this.props.data}/>
      </div>
    );
  }
});

module.exports = ControlPanel;
