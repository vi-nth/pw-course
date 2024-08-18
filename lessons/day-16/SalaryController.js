// Data model processing - FP
class SalaryController {

    // FP
    getTotalSalary(employeeList) {
        let totalSalary = 0;
        employeeList.forEach(function (employee) {
            totalSalary += employee.salary;
        })
        return totalSalary;
    }
}

module.exports = SalaryController;