
var MenuItemProject = React.createClass({
  render: function() {
    return (
      <li>
        <a className="gn-icon gn-icon-archive">{this.props.name}</a>
        <ul className="gn-submenu">
          <li><a className="gn-icon gn-icon-article">CRUD</a></li>
          <li><a className="gn-icon gn-icon-search">Database Info</a></li>
        </ul>
      </li>
    );
  }
});

var MenuItemSettings = React.createClass({
  render: function() {
    return (
      <li><a className="gn-icon gn-icon-cog">Settings</a></li>
    );
  }
});

var MenuItemHelp = React.createClass({
  render: function() {
    return (
      <li><a className="gn-icon gn-icon-help">Help</a></li>
    );
  }
});

var ReactMenu = React.createClass({
  render: function() {
    var createProject = function(item, index) {
      return <MenuItemProject name={item}/>;
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
    return {selected: -1};
  },
  componentDidMount: function() {
    new gnMenu(document.getElementById('gn-menu'));
  },
  render: function() {
    return (
      <ul id="gn-menu" className="gn-menu-main MainMenu ">
        <li className="gn-trigger">
          <a className="gn-icon gn-icon-menu"><span>Menu</span></a>
          <ReactMenu projects={this.props.projects}/>
        </li>
        <li className="tinyLink"><a href={this.props.link}>wytiny</a></li>
        <li className="rightButton"><a>VAG-Electron</a></li>
      </ul>
    );
  }
});

module.exports = MainMenu;
