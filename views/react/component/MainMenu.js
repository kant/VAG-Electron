
var MainMenu = React.createClass({
  getInitialState: function() {
    return {selected: -1};
  },
  handleClick: function(e){
    console.log(11111);
    // this.setState({selected: Number(e.target.id.split("list")[1])});
  },
  render: function() {
    return (
      <div className="MainMenu">
        <ul >
          {
            this.props.list.map(function(item, index) {
              return <li onClick={this.handleClick} id={"list"+index}><a>{item}</a></li>
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = MainMenu;
