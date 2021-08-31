# ReactApp1

#Notes

#This is a financial curation application (frontend)

#NOTES

# See package.json file for a snippet code regarding Spring Boot backend
# https://twelvedata.com/ ---> The external API (with API key)for financial indicators ---> see Stocks.js file.
# "proxy": "http://localhost:8080"
# This is the port which the Spring Boot application run on and this line of code help the bacend and frontend to run together.
# The react app run on port 3000
# The files to look at to solve the problem regarding writing the rest api is Stock.js and in the Spring Boot App is Favourites.Java, FavouritesController.Java 
# and FavouriteRepository.Java.

# In Stocks.js there is inter alia code to fetch data from the external api called "Tweve Data". This is thrown directly onto the stocks page (if the app is run)
# It contains 4 groups of data with buttons.
# When this button/s is clicked a post request (another api call) must be implemented with the endpoint 'api3/favourites'
# For this see the application.properties file which contain the servlet 'api3' while 'favourites' refer to the table in the database
# where the data must be written to. MySQL is used and the sql code is already written to open the database and table in the workbench. It works.
# The creation of the Rest API also works and was tested with Postman. The API was created in the Java files mentioned above.
# My suggestion is to run and show the application in teamviewer to save time and the UI can then be seen. Spring Boot runs in Eclipse and the React App in Visual Studio Code.
# But these two applications can run seperately in the two IDE.
# Success will be if the data from a user click can be written to the table - see Stock.js
# See "Favourites.Java" for the columns being used (the same as in Stocks.js) for the database/table.
# Also not that currently the column is all set to Strings. This is the same for the database, but it will have to change.
# For now the main goal is to establish inconnectivity between the backend and frontend. - see Stocks.js



