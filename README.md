Team Profile Generator
Team Profile Generator Screenshot

Description
The Team Profile Generator is a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. The application uses Inquirer for collecting user input and Jest for running unit tests.

Walkthrough Video
Click here to watch the walkthrough video demonstrating the functionality of the Team Profile Generator and passing tests.

Features
Collects user input for team members and their information
Generates an HTML file displaying a nicely formatted team roster based on user input
Email addresses open in the default email program with the TO field populated
GitHub usernames open in a new tab
Unit tests for each part of the code
Installation
To use the Team Profile Generator, follow these steps:

Clone this repository
Navigate to the root directory of the project in your terminal
Run npm install to install the required dependencies
Run npm i inquirer@8.2.4 to install the Inquirer package (version 8.2.4)
Usage
In your terminal, navigate to the root directory of the project
Run node index.js
Follow the prompts to enter the team manager's name, employee ID, email address, and office number
Choose whether to add an engineer, add an intern, or finish building your team
If you add an engineer, enter their name, ID, email, and GitHub username
If you add an intern, enter their name, ID, email, and school
Continue adding team members or finish building your team
Once you finish, the application will generate an HTML file in the dist/ directory with your team's information
Testing
To run the unit tests, navigate to the root directory of the project in your terminal and run npm test.

License
This project is licensed under the MIT License.




