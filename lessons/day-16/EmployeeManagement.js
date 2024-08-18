// Create data, call controller to process data
const Employee = require("./Employee");
const SalaryController = require("./SalaryController");

// user-defined data - model
const an = new Employee(800);
const binh = new Employee(1000);

// Init controller
let salaryController = new SalaryController;
const totalSalary = salaryController.getTotalSalary([an, binh]);
console.log(`Total salary ${totalSalary}`);