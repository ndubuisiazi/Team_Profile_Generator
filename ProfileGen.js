let html = []

class manager {
    constructor(name,id,email, officeNumber){
        this.name = name;
        this.email = email;
        this.id = id;
        this.officeNumber = officeNumber
    }


    moveHtml(){
        let manager1 = `<div class="w-3/4 text-center  grid grid-rows-2 h-full bg-yellow-300 rounded shadow-2xl">`+
        `<div class="w-full text-center text-white font-bold grid grid-rows-2 h-20 bg-blue-600"><ul>`+
        `<li>`+ this.name +`</li>`+
        `<li> Manager</li>`+
        `</ul></div>`+
        `<div><ul>`+
        `<li> ID: `+this.id+`</li>`+
        `<li> Email: <a href="`+this.email +`">`+this.email +`</a></li>`+
        `<li> Office Number: `+this.officeNumber +` </li>`+
        `</div>`+
        `</div>`

        html.push(manager1)
        console.log(manager1)
    }

}

class questionFilter {
    constructor( profileType){
        this.profileType =profileType
    }

    filter(){
       if(this.profileType=="Engineer"){
        console.log("it worked Engineer")
       }
       else if(this.profileType=="Intern"){
        console.log("It worked Intern")
       }
       else if(this.profileType=="Finished"){
        console.log("It worked finished")
       }
    }
}





module.exports = {manager,questionFilter}
