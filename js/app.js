'use strict';

let employee = [];

function employeeObject(employeeId, fullName, department, level, imageUrl, salary) {
    this.id = employeeId;
    this.name = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary;

    employee.push(this);
}
employeeObject.prototype = function () {
    if (employeeObject.this.level.toLowerCase() === 'junior'){
        var min = 500;
        var max = 1000;
        function getRandomArbitrary(min, max) {
            return (Math.random() * (max - min) + min) ;
          }
        }
    if (employeeObject.this.level.toLowerCase() === 'mid-senior'){
        var min = 1000;
        var max = 1500;
        function getRandomArbitrary(min, max) {
            return let  (Math.random() * (max - min) + min) ;
          }
    }
    if (employeeObject.this.level.toLowerCase() === 'senior'){
        var min = 1500;
        var max = 2000;
        function getRandomArbitrary(min, max) {
            return (Math.random() * (max - min) + min) ;
          }
    }
    let netSalary = (Math.random() * (max - min) + min) * 0.075;
}

employeeObject.prototype.render = function () {
    //console.log(this.name);
    //document.write(`<h1> employee name is ${this.name}, the net salary is ${netSalary} </h1>`);
    let conntainer =document.createElement("div")
    myCard.appendChild(conntainer)
    let info = document.createElement("p");
    info.textContent = `Name:${this.name} -ID: ${this.id }  Department:${this.department} -Level:${this.level} -Salary:${this.salary} -Net Salary:${this.netSalary}`;
    conntainer.appendChild(info);
    info.style.width="15rem";
}
let ghaziSamer = new employeeObject("1000", "Ghazi Samer", "Administration", "senior");
let lanaAli = new employeeObject("1001", "Lana Ali", "Administration", "senior");
let tamaraAyoub = new employeeObject("1002", "Tamara Ayoub", "Administration", "senior");
let safiWalid = new employeeObject("1003", "Safi Walid", "Administration", "senior");
let omarZaid = new employeeObject("1004", "Omar Zaid", "Administration", "senior");
let ranaSaleh = new employeeObject("1005", "Rana Saleh", "Administration", "senior");
let hadiAhmad = new employeeObject("1006", "Hadi Ahmad", "Administration", "senior");
let myCard = document.getElementById("oldCard");

//ghaziSamer.log(employee);
//lanaAli.render();
//tamaraAyoub.render();
//safiWalid.render();
//omarZaid.render();
//ranaSaleh.render();
//hadiAhmad.render();


for (let i = 0; i < employee.length; i++) {
    employee[i].render();
}
newCard.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    for (let j = 0; j < allEmployees.length; j++) {
        var employeeId = Math.floor(1006 + j);
    }
    event.preventDefault();
    let name = event.target.name.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let newEmployee = new employeeObject(employeeId, name, department, level);
    newEmployee.render();
}