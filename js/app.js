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
            return Math.random() * (max - min) + min;
          }
        }
    if (employeeObject.this.level.toLowerCase() === 'mid-senior'){
        var min = 1000;
        var max = 1500;
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
          }
    }
    if (employeeObject.this.level.toLowerCase() === 'senior'){
        var min = 1500;
        var max = 2000;
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
          }
    }
    let netSalary = Math.random() * (max - min) + min;
}

employeeObject.prototype.render = function () {
    console.log(`employee name is ${this.name}, the net salary is ${netSalary}`);
}
let ghaziSamer = new employeeObject("1000", "Ghazi Samer", "Administration", "senior");
let lanaAli = new employeeObject("1001", "Lana Ali", "Administration", "senior");
let tamaraAyoub = new employeeObject("1002", "Tamara Ayoub", "Administration", "senior");
let safiWalid = new employeeObject("1003", "Safi Walid", "Administration", "senior");
let omarZaid = new employeeObject("1004", "Omar Zaid", "Administration", "senior");
let ranaSaleh = new employeeObject("1005", "Rana Saleh", "Administration", "senior");
let hadiAhmad = new employeeObject("1006", "Hadi Ahmad", "Administration", "senior");


    
    