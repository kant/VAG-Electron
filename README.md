##VAG-Electron

Begins at 2015/9/10

####About The Application
It's a Database Control Panel built by Electron.
Through this cross-platform application, you can perform CRUD operations(bulk) with embedded RESTful API on detailed databases.

####Notice
* Development mode is default. Run the server.js with node command in the background, a webpack-dev-server is actually started to host the pages(like express). Then start the application with `electron /path/to/project` for debugging.
* With react-hot-loader, it's possible to change UI without reloading the whole page.
* Webpack is used to manage all front-end resources.
* Views are supposed to be created with React.js.
* To put the application in use, do remember to modify the webpack.config.js, remove hot-loader plugins and webpack-related arguments.

####Build the project

> git clone
> npm install
> electron .
