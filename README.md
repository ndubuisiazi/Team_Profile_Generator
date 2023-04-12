<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>
    <h1>Team Profile Generator</h1>
    <p>A Node.js command-line application that generates a team profile webpage based on user inputs.</p>
php
Copy code
<h2>Description</h2>
<p>This application prompts the user for information about their team members, including a team manager, engineers, and interns. The user provides the required details, and the application generates an HTML file that displays a team profile with the provided information.</p>

<h2>Features</h2>
<ul>
    <li>User-friendly command-line interface</li>
    <li>Supports team manager, engineers, and interns</li>
    <li>Generates a responsive and visually appealing team profile webpage</li>
    <li>Utilizes Inquirer for collecting user inputs</li>
    <li>Validates user inputs to ensure accurate information</li>
</ul>

<h2>Installation</h2>
<ol>
    <li>Clone the repository:</li>
    <pre><code>git clone https://github.com/ndubuisiazi/Team_Profile_Generator.git</code></pre>
    <li>Navigate to the project directory:</li>
    <pre><code>cd team-profile-generator</code></pre>
    <li>Install the required dependencies:</li>
    <pre><code>npm install</code></pre>
</ol>

<h2>Usage</h2>
<ol>
    <li>Run the application:</li>
    <pre><code>node index.js</code></pre>
    <li>Follow the prompts to enter your team manager's information.</li>
    <li>After entering the team manager's information, you'll be given options to add engineers or interns to the team or finish building your team.</li>
    <li>Choose "Engineer" or "Intern" to enter their respective information. You can add multiple engineers or interns by selecting the option again after entering the details.</li>
    <li>Once you've finished adding all team members, choose "Finished" to generate the team profile webpage.</li>
    <li>The application will generate an <code>output.html</code> file in the project directory containing your team profile.</li>
    <li>Open the <code>output.html</code> file in your browser to view your team profile webpage.</li>
</ol>

<h2>Dependencies</h2>
<ul>
    <li><a href="https://www.npmjs.com/package/inquirer" target="_blank">Inquirer</a>: A collection of common interactive command-line user interfaces.</li>
    <li><a href="https://nodejs.org/api/fs.html" target="_blank">fs</a>: The built-in Node.js file system module for working with the file system.</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License.</p>
</body>
</html>



