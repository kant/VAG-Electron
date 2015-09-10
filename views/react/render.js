var MainMenu = require('./component/MainMenu.js');
var list = ['Agriculture', 'City'];
var link = "http://www.wytiny.me"
React.render(<MainMenu projects={list} homelink={link}/>, document.getElementById("main"));
