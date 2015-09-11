var React = require('react');
var ControlPanel = require('./component/ControlPanel');
var reactData = {
  homeLink: "http://www.wytiny.me",
  projects: [{
    id: 0,
    name: "农业大数据",
    database: ""
  }, {
    id: 1,
    name: "智慧城市",
    database: ""
  }]
};
React.render(<ControlPanel data={reactData}/>, document.getElementById("react"));
