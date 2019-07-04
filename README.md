# MERNDemo
This is a general MERN Stack web application that resembles a freelancing website.
This project follows a CI/CD workflow: features will be added overtime but tested and deployed.


# Files

A brief description of each folder/file

## ROOT

|File name       | Description                   |
|----------------|-------------------------------|
|server.js|`the API server file that connects mongoDB, initialize middleware, and defines the API routes`|
|package.json|`defines the dependencies for the express.js`|

## \client

*The client folder includes all the frontend react code and some other dependent resources.*

|File name       | Description                   |
|----------------|-------------------------------|
|package.json|`defines the dependencies for the react.js`|



### \client\src
*Contains the source code of the frontend*

|File name       | Description                   |
|----------------|-------------------------------|
|app.js|`the main app component`|
|index.js|`boiler-plate file to render the app`|
|store.js|`boiler-place file to set up the redux store`|
|style.min.css|`the CSS file compiled by SASS and used for the site`|

### \client\src\actions
|File name       | Description                   |
|----------------|-------------------------------|
|alert.js|`defines a setAlert method to be used to add alert messages onto pages`|
|types.js|`different types of alert actions e.g. set alert, remove alert (not to be confused with different types of alerts e.g. warning, danger)`|

### \client\src\components
*components can be used as modules by the page, they are classified into different categories and placed in different folders*

### \client\src\img
*image resources*

### \client\src\reducers
*redux reducers to support state transfer*

## config
*config file for the entire project*

|File name       | Description                   |
|----------------|-------------------------------|
|db.js|`boiler-plate file to connect to mongoDB`|
|default.json|`private file that contains information such as db login credentials and jwtSecret`|

## dist
*feature oriented preview/prototyping of html pages and SASS testing*

## middleware
*most middlewares are imported, a few requires customized actions such as the JWT*

## models
*defines objects for the DB schema. e.g. user object has name, email, password, e.t.c.*

## routes
*defines the behavior of API endpoints using the router*

## scss
*SASS development for creating CSS for the site. the developemtn is previewed in the dist folder and the css file is then directly copied to the client folder for deployment*
