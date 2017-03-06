REST app and service.
First assignment for IDU0080.


HOW TO SET UP:


Create a PostGreSQL database with the name "idu_0080".
For the database to be named something different, PROPERTY_NAME_DATABASE_URL needs to be changed in both

REST_app\src\main\java\ttu\idu0080\rest\config\MvcConfiguration.java
and
REST_service\src\main\java\ttu\idu0080\rest\config\MvcConfiguration.java

For what to insert into the database (format and sample data), see CREATE_DB_idu_0080 and INSERT_DB_idu_0080.

For running, I used Eclipse and Tomcat v8.0.


NAVIGATION:

App:

1. http://localhost:8080/REST_app/ - Index page
2. http://localhost:8080/REST_app/service/search?author=x - search by author
3. http://localhost:8080/REST_app/service/external/books - external service to display all books in database

Service:

http://localhost:8080/REST_service/service/books - display all books in database