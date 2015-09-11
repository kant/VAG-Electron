var React = require('react');

var Dashboard = require('./Dashboard');

var MenuItemProject = React.createClass({
  render: function() {
    var name = this.props.data.name;
    var id = this.props.data.id;
    return (
      <li>
        <a className="gn-icon gn-icon-archive" id={id+"-project"}>{name}</a>
        <ul className="gn-submenu">
          <li><a className="gn-icon gn-icon-article" id={id+"-crud"}>CRUD</a></li>
          <li><a className="gn-icon gn-icon-search" id={id+"-info"}>Database Info</a></li>
        </ul>
      </li>
    );
  }
});

var MenuItemSettings = React.createClass({
  render: function() {
    return (
      <li><a className="gn-icon gn-icon-cog" id="settings">Settings</a></li>
    );
  }
});

var MenuItemHelp = React.createClass({
  render: function() {
    return (
      <li><a className="gn-icon gn-icon-help" id="help">Help</a></li>
    );
  }
});

var ReactMenu = React.createClass({
  render: function() {
    var createProject = function(item, index) {
      return <MenuItemProject data={item}/>;
    }
    return (
      <nav className="gn-menu-wrapper">
        <div className="gn-scroller">
          <ul className="gn-menu">
            {this.props.projects.map(createProject)}
            <MenuItemSettings/>
            <MenuItemHelp/>
          </ul>
        </div>
      </nav>
    );
  }
});

var MainMenu = React.createClass({
  getInitialState: function() {
    return {target: -1};
  },
  componentDidMount: function() {
    new gnMenu(document.getElementById('gn-menu'));
    var container = this;
    $('nav li a').click(function(e) {
      $(e.target).addClass('focus');
      $('nav li a').not(e.target).removeClass('focus');
      container.setState({target: $(e.target)[0].id});
      console.log(container.state.target);
    });
  },
  render: function() {
    return (
      <div>
        <ul id="gn-menu" className="gn-menu-main MainMenu">
          <li className="gn-trigger">
            <a className="gn-icon gn-icon-menu"><span>Menu</span></a>
            <ReactMenu projects={this.props.data.projects}/>
          </li>
          <li className="tinyLink"><a href={this.props.data.homeLink}>wytiny</a></li>
          <li className="rightButton"><a>VAG-Electron</a></li>
        </ul>
        <Dashboard status={this.state.target}/>        
      </div>
    );
  }
});

module.exports = MainMenu;
