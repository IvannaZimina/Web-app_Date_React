# Task
Implement a web application containing a date/time input form with (at least) two (React) components and a submit button

## Stack front-end
JavaScript, React, Redux, Sass(SCSS)

## Libraries
Axios, Moment, React-Date-Range

## Stack back-end
json-server

## Description
On the start page - both clint and defauslt inputs show the current date.
First Input - is for Client to choose the date in the Calendar.
Second Input - set by deafault and can't be changed by user.
When user change the date in the first input - the second input updates with new date.
Tha calendar in the second input only for vizualization of the calendar with the current date.
![image](https://user-images.githubusercontent.com/46706194/215551922-1fcbd1b0-537b-4a4a-891d-5da58cac367c.png)

If client chooses the date not in the current month - the error message is showing.
![image](https://user-images.githubusercontent.com/46706194/215552053-fa74dbd4-5704-431b-905a-a523120c2645.png)

When client sends the date - the success message also displayed.
![image](https://user-images.githubusercontent.com/46706194/215552089-f12d990d-f405-4028-98b6-dab9e3830842.png)

The date list is showing by clicking on the "GET DATE LIST" Button.
The date list is hiding by clicking on the "HIDE DATE LIST" Button
![image](https://user-images.githubusercontent.com/46706194/215553392-c4c8eef4-b536-428f-9569-412364a575e5.png)

The date were wrote to the DB on the json-server in UTC format.
![image](https://user-images.githubusercontent.com/46706194/215555451-22fcc138-0816-4652-a67c-278ac3e40b1a.png)

## Environment
Both front-end and back-end should be started synchronize to work correct

### Front-end environment
Clone project to your machine. Use npm install to add all dependencies in project and use script for starting web-app.
### Back-end environment
Clone project from https://github.com/IvannaZimina/Web-app_Date_React_JSON_SERVER
Use npm install to add all dependencies in project and use script for starting web-app.
Json-server uses the port 8999.

## Additional information
The Axios library was used to build REST API (post and get requests).
For formating the date - the Moment library was used.
For chowing calendar behind the input - React-Date-Range Libray was used.
Redux store was used to exchange data between components.
For page design, simple styles were added using SASS.
