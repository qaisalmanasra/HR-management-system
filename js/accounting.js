'use strict'
let employee = [];
let tableEl = document.getElementById('tableId')
function EmployeeObject(employeeId, fullName, department, level, imageUrl, salary) {
    this.id = employeeId;
    this.name = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary;
    employee.push(this);
    dataTable(department, Number.parseFloat(salary));
}
const emTable = {};
function dataTable(department, salary) {
  if (!emTable[department]) {
    emTable[department] = { employeeCount: 1, salaryTotal: salary, salaryAvg: salary };
  } else {
    let employeeCount = emTable[department].employeeCount;
    let salaryTotal = emTable[department].salaryTotal;
    emTable[department].employeeCount = employeeCount + 1;
    emTable[department].salaryTotal = salaryTotal + salary;
    emTable[department].salaryAvg = emTable[department].salaryTotal / (employeeCount + 1);
  }
}
let ghaziSamer = new EmployeeObject("1000", "Ghazi Samer", "Administration", "senior", './images/maleicon.png', '1660');
let lanaAli = new EmployeeObject("1001", "Lana Ali", "Administration", "senior", './images/femaleicon.png', '1600');
let tamaraAyoub = new EmployeeObject("1002", "Tamara Ayoub", "Administration", "senior", './images/femaleicon.png', '1640');
let safiWalid = new EmployeeObject("1003", "Safi Walid", "Administration", 'Mid-Senior', './images/maleicon.png', '1420');
let omarZaid = new EmployeeObject("1004", "Omar Zaid", "Administration", "senior", './images/maleicon.png', '1700');
let ranaSaleh = new EmployeeObject("1005", "Rana Saleh", "Administration", "junior", './images/femaleicon.png', '800');
let hadiAhmad = new EmployeeObject("1006", "Hadi Ahmad", "Administration", 'Mid-Senior', './images/maleicon.png', '1385');
EmployeeObject.prototype.renderTable = function () {
  let employeeCounts = 0;
  let employeeSalary = 0;
  for (const [department, values] of Object.entries(emTable)) {
    let trTd = document.createElement('tr');
    tableEl.appendChild(trTd);

    let depName = document.createElement('td');
    depName.textContent = department;
    trTd.appendChild(depName);

    let numberOfEmplouees = document.createElement('td');
    numberOfEmplouees.textContent = values.employeeCount;
    trTd.appendChild(numberOfEmplouees);

    let salaryAvg = document.createElement('td');
    salaryAvg.textContent = values.salaryTotal;
    trTd.appendChild(salaryAvg);

    let salaryTotal = document.createElement('td');
    salaryTotal.textContent = values.salaryAvg;
    trTd.appendChild(salaryTotal);

    employeeCounts += values.employeeCount;
    employeeSalary += values.salaryTotal;
  }
  let total = document.createElement('td');
  total.textContent = 'Total';
  total.classList = 'total';
  tableEl.appendChild(total);
  let salaryemployee = document.createElement('td');
  salaryemployee.textContent = employeeCounts;
  salaryemployee.classList = 'total';
  tableEl.appendChild(salaryemployee);
  let salaryAllTotal = document.createElement('td');
  salaryAllTotal.textContent = employeeSalary;
  salaryAllTotal.classList = 'total';
  tableEl.appendChild(salaryAllTotal);
  let salaryAllAvg = document.createElement('td');
  salaryAllAvg.textContent = employeeSalary / employeeCounts;
  salaryAllAvg.classList = 'total';
  tableEl.appendChild(salaryAllAvg);
};
employee[0].renderTable();
function getData() {
  let retrievedData = localStorage.getItem('employeeItem');
  let arrayData = JSON.parse(retrievedData);
  if (arrayData != null) {
    for (let i = 0; i < arrayData.length; i++) {
      new Employee(arrayData[i].id, arrayData[i].fullName, arrayData[i].department, arrayData[i].level, arrayData[i].image, arrayData[i].salary);
    }
  }
  employee[0].renderTable();
}
getData();