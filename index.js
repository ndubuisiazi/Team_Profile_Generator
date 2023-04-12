let fs = require('fs')

const inquirer = require('inquirer');
const { Module } = require('module');
const {manager} = require('./ProfileGen');

let response = [];
output=""





// class questionfilter {
//   constructor(questionType)
//   {this.questionType = questionType}
//   run(){inquirer.prompt(this.questionType)} 

// }



// let response=[]

// console.log('Hi, please answer the following questions to create team profiles');




const questionsMgr = [

  { type: 'input',
    name: 'Team Manager',
    message: 'Please enter team managers name?',
  },{
    type: 'input',
    name: 'id',
    message: 'Input employee ID',
  },{
    type: 'input',
    name: 'Email',
    message: 'Input employee Email',
  },{
    type: 'input',
    name: 'Office Number',
    message: 'Input Office Number',
  }
]

const Engineer = [

  { type: 'input',
    name: 'Name',
    message: 'Please enter name?',
  }
  ,{
    type: 'input',
    name: 'id',
    message: 'Input employee ID',
  },{
    type: 'input',
    name: 'Email',
    message: 'Please enter email address',
  },{
    type: 'input',
    name: 'Github',
    message: 'Please enter GitHub username',
  }]

questiontype = [
  { 
    type: 'list',
    name: 'Next',
    message: 'If you would like to add an Engineer or intern or finish building your team select below',
    choices: ['Engineer','Intern','Finished']
  }]  

 

const Intern = [
  { type: 'input',
    name: 'Name',
    message: 'Please enter name?',
  },{
    type: 'input',
    name: 'id',
    message: 'Input employee ID',
  },{
    type: 'input',
    name: 'Email',
    message: 'Please enter email address',
  },{
    type: 'input',
    name: 'School',
    message: 'Please enter your school',
  }]

  function templateIntern(response) {
    outputEng=
    `<!DOCTYPE html>`+
    `<html lang="en">`+
    `<head>`+
      `<title>Profiles</title>`+
      `<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">`+
      `</head>`+
        `<body >`+
        `<div  class="w-screen h-screen space-y-4 bg-white-300 grid grid-rows-6 place-items-center ">`+
          `<div class="space-y-4 bg-gray-300 w-screen h-full place-items-center grid grid-cols-1 rounded shadow-2xl row-start-1">`+
          `<div class="text-center ">Team Profile</div>`+
          `</div>`+
          `<div id='container' class="w-screen h-full bg-white-300 grid grid-cols-3 row-span-2 row-start-3 justify-items-center">`+
          `<div class="w-3/4 text-center  grid grid-rows-2 h-full bg-yellow-300 rounded shadow-2xl">`+
          `<div class="w-full text-center text-white font-bold grid grid-rows-2 h-20 bg-blue-600"><ul>`+
          `<li>`+Object.values(response[0])[0] +`</li>`+
          `<li> Manager</li>`+
          `</ul></div>`+
          `<div><ul>`+
          `<li>`+Object.keys(response[0])[1] +`: `+Object.values(response[0])[1] +`</li>`+
          `<li>`+Object.keys(response[0])[2] +`: <a href="`+Object.values(response[0])[2] +`">`+Object.values(response[0])[2] +`</a></li>`+
          `<li>`+Object.keys(response[0])[3] +`: `+Object.values(response[0])[3] +` </li>`+
          `</div>`+
          `</div>`+
          `<div  class="w-3/4 text-center  grid grid-rows-2 h-full bg-yellow-300 rounded shadow-2xl">`+
          `<div class="w-full text-center font-bold text-white grid grid-rows-2 h-20 bg-blue-600"><ul>`+
          `<li>`+Object.values(response[1])[0] +`</li>`+
          `<li>`+Object.values(response[0])[4] +`</li>`+
          `</ul></div>`+
          `<div><ul>`+
          `<li>`+Object.keys(response[1])[1] +`: `+Object.values(response[1])[1] +`</li>`+
          `<li>`+Object.keys(response[1])[2] +`: <address><a href="mailto:`+Object.values(response[1])[2] +`">`+Object.values(response[1])[2] +`</a></address></li>`+
          `<li>`+Object.keys(response[1])[3] +`: <a href="https://github.com/`+Object.values(response[1])[3] +`">`+Object.values(response[1])[3] +` </li>`+
          `</div>`+
          `</div>`+
          '<div class="w-3/4 text-center grid grid-rows-2 h-full bg-yellow-300 rounded shadow-2xl">'+
          `<div class="w-full text-center font-bold text-white grid grid-rows-2 h-20 bg-blue-600"><ul>`+
          `<li>`+Object.values(response[2])[0] +`</li>`+
          `<li>`+Object.values(response[1])[4] +`</li>`+
          `</ul></div>`+
          `<div><ul>`+
          `<li>`+Object.keys(response[2])[1] +`: `+Object.values(response[2])[1] +`</li>`+
          `<li>`+Object.keys(response[2])[2] +`: <a href="`+Object.values(response[2])[2] +`">`+Object.values(response[2])[2] +`</a></li>`+
          `<li>`+Object.keys(response[2])[3] +`: <a href="https://github.com/`+Object.values(response[2])[3] +`">`+Object.values(response[2])[3] +` </li>`+
          `</div>`+
          `</div>`+
          `</div>`+
          `<script src="./index.js"></script>`+
          
      `</body>`+
    
    `</html>`
    return outputEng; // Add this line to return the generated HTML
  }

    

    function askQuestion() {
      inquirer.prompt(questiontype).then((a) => {
        if (a.Next === 'Engineer') {
          inquirer.prompt(Engineer).then((engineerData) => {
            response.push(engineerData);
            askQuestion();
          });
        } else if (a.Next === 'Intern') {
          inquirer.prompt(Intern).then((internData) => {
            response.push(internData);
            askQuestion();
          });
        } else {
          const output = templateIntern(response);
          fs.writeFileSync('teamProfile.html', output, 'utf-8');
          console.log('Team profiles generated in teamProfile.html');
      }
      });
    }
    
    console.log('Hi, please answer the following questions to create team profiles');
    
    inquirer.prompt(questionsMgr).then((managerData) => {
      response.push(managerData);
      askQuestion();
    });

























  // if(response[0].Next == 'Engineer'){
  //   inquirer.prompt(questionsEng).then((b) =>{
  //   // for (let i =0; i< Object.values(b).length; i++)
  //   response.push(b)
  //   console.log(response)
      
    
  //     if(response[1].Next == 'Engineer'){
  //       inquirer.prompt(questionsEng).then((d) =>{
  //         // for (let i =0; i< Object.values(d).length; i++)
  //         response.push(d)
  //         console.log(response)
  //         templateIntern(...response),
  //         fs.writeFileSync("./readme.html", outputEng)
          
          
  //             })}

  //     else if(response[1].Next == 'Intern'){ 
  //       inquirer.prompt(questionsInt).then((e) =>{
  //         // for (let i =0; i< Object.values(e).length; i++)
  //         response.push(e)
  //         console.log(response)
  //         templateIntern(...response),
  //         fs.writeFileSync("./readme.html", outputEng)

  //       })}
  //     else(
  //         templateIntern(...response),
  //         fs.writeFileSync("./readme.html", outputEng)
  //       )})}  




    
  // else if(response[0].Next == 'Intern'){
  //   inquirer.prompt(questionsInt).then((b) =>{
  //   // for (let i =0; i< Object.values(b).length; i++)
  //   response.push(b)
  //   console.log(response)
      
    
  //     if(response[1].Next == 'Engineer'){
  //       inquirer.prompt(questionsEng).then((d) =>{
  //         // for (let i =0; i< Object.values(d).length; i++)
  //         response.push(d)
  //         console.log(response)
  //         templateIntern(...response),
  //         fs.writeFileSync("./readme.html", outputEng)
          
          
  //             })}

  //     else if(response[1].Next == 'Intern'){ 
  //       inquirer.prompt(questionsInt).then((e) =>{
  //         // for (let i =0; i< Object.values(e).length; i++)
  //         response.push(e)
  //         console.log(response)
  //         templateIntern(...response),
  //         fs.writeFileSync("./readme.html", outputEng)

  //       })}
  //     else(
  //         templateIntern(...response),
  //         fs.writeFileSync("./readme.html", outputEng)
  //       )})} 




  // else(
  //   templateIntern(...response),
  //   fs.writeFileSync("./readme.html", outputEng))}})
    


  
