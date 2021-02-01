Caching in progress requests issue example project

modified from the Apollo Server example found at https://www.apollographql.com/docs/apollo-server/getting-started/


Project contents:
	- The Apollo server project includes the index.js file and a datasource.js file.
	- An http server file called server.js. it prints to the console whenever the requestListener runs
	- a shell script called 2query_multiple_calls_to_same_datasource.sh. This consists of two curl commands that are run simultaneously. The curl commands were copied from the GraphQL Playground.


How to Run:

	1. Navigate graphql-server-example directory
	2. In a terminal, run the Apollo server by by running this command:
		NODE_ENV='development' node index.js 
	3. In another terminal, run the http server using this command:
		node server.js
	4. In a third terminal, run the following shell script:
		./2query_multiple_calls_to_same_datasource.sh


 	
	Results for this program:
	The apollo server prints out two calls to the the same endpoint showing that the first request wasn't cached before the second call was sent. The server.js prints two request calls showing that two requests were made.
		


