'use strict';

let employee = [];
let newCard = document.getElementById('form');
let conntainer = document.getElementById('cardDiv');
let myCard = document.getElementById("oldCard");

function EmployeeObject(employeeId, fullName, department, level, imageUrl, salary) {
    this.id = employeeId;
    this.name = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary;
    employee.push(this);
}
EmployeeObject.prototype.salary = function () {
    let netSalary = 0
    if (EmployeeObject.this.level.toLowerCase() === 'junior'){
        var min = 500;
        var max = 1000;
        netSalary = (Math.floor(Math.random() * (max - min + 1)) + min);
    }
    else if (EmployeeObject.this.level.toLowerCase() === 'mid-senior'){
        var min = 1000;
        var max = 1500;
        netSalary = (Math.floor(Math.random() * (max - min + 1)) + min);
    }
    else (EmployeeObject.this.level.toLowerCase() === 'senior'){
        var min = 1500;
        var max = 2000;
        netSalary = (Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return `${net - (net * (7.5 / 100))}`
    
}

EmployeeObject.prototype.render = function () {
    //console.log(this.name);
    //document.write(`<h1> employee name is ${this.name}, the net salary is ${netSalary} </h1>`);
    let conntainer =document.createElement("div");
    conntainer.classList = ('cardDiv');
    myCard.appendChild(conntainer);
    let imageEmployee = document.createElement('img');
    imageEmployee.classList = ('card-img-top');
    imageEmployee.src = this.image;
    imageEmployee.alt = 'profilePic';
    card.appendChild(imageEmployee);
    let info = document.createElement("p");
    info.textContent = `Name:${this.name} -ID: ${this.id }  Department:${this.department} -Level:${this.level} -Salary:${this.salary} -Net Salary:${this.netSalary}`;
    conntainer.appendChild(info);
}
let ghaziSamer = new EmployeeObject("1000", "Ghazi Samer", "Administration", "senior", './images/maleicon.png', '1660');
let lanaAli = new EmployeeObject("1001", "Lana Ali", "Administration", "senior", './images/femaleicon.png', '1600');
let tamaraAyoub = new EmployeeObject("1002", "Tamara Ayoub", "Administration", "senior", './images/femaleicon.png', '1640');
let safiWalid = new EmployeeObject("1003", "Safi Walid", "Administration", 'Mid-Senior', './images/maleicon.png', '1420');
let omarZaid = new EmployeeObject("1004", "Omar Zaid", "Administration", "senior", './images/maleicon.png', '1700');
let ranaSaleh = new EmployeeObject("1005", "Rana Saleh", "Administration", "junior", './images/femaleicon.png', '800');
let hadiAhmad = new EmployeeObject("1006", "Hadi Ahmad", "Administration", 'Mid-Senior', './images/maleicon.png', '1385');


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

EmployeeObject.prototype.id = function () {
    return Math.floor(1000 + Math.random() * 9000);
}

newCard.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let id = EmployeeObject.prototype.id();
    let name = event.target.name.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;
    let salary = EmployeeObject.prototype.salary();
    let newEmployee = new EmployeeObject(id, name, department, level, image,salary);
    newEmployee.render();
}