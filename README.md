# TIK-TAK-TOE Server part(BackEnd):

Basic requirements: 


* Two users play a game of tick-tack-toe on the same computer 
* No real-time functionality is required 
* Single session 
* All actions are reported to the API, which saves them 
* Action log is displayed underneath the game area, read from the API 
* The game must resume completely if the browser is refreshed


To get the project up and running, and view components in the browser, complete the following steps:

    Download and install Node: https://nodejs.org/
    Clone this repo: git clone https://github.com/west1155/tik_tak_back.git (HTTPS) and inside root to the folder tik_tak https://github.com/west1155/tik_tak_front.git (HTTPS)
    Install project dependancies: npm install
    Start the development environment: npm start
    Open your browser and visit http://localhost:1111

Development:


* The project is been developed by requirement excluding the last part (The game must resume completely if the browser is refreshed). 
By developing the last part i was using an array to store the location and player, which is based on the server and UI connects to it through the API.
Every time we start the game the initialisation should be proceesed from the server. Ive got fetch method which returns an array, but when the data is back, it is represented different way. 
If it would be java, the problem would be solved by making a static array.
p.s ill try to fix the bug in the nearest future.



Testing:

Ive used Mocha for backend testing.
As the server part is simple, our test is based on simple function running on the server.
The test is in test directory.
To run the test:

1. Run mocha command from the root directory






