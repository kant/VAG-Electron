var React = require('react');

var Dashboard = React.createClass({
  render: function() {
    if(this.props.status == "1-crud")
      return (
        <div id="Dashboard">
          <section className="sec"></section>
          <section className="sec"></section>
        </div>
      );
    else if(this.props.status == "0-project")
      return (
        <div id="Dashboard">
          <section className="sec"></section>
          <section className="sec"></section>
          <section className="sec"></section>
        </div>
      );
    else
      return (<div></div>);
  }
});

module.exports = Dashboard;
