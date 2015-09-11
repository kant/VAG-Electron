var MainMenu = require('./component/MainMenu.js');
var list = ['Agriculture', '中文'];
var link = "http://www.wytiny.me"
React.render(<MainMenu projects={list} link={link}/>, document.getElementById("main"));
