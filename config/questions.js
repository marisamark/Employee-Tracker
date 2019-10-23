exports.initialQ = {
    name: "command",
    message: "What would you like to do?",
    type: "rawlist",
    choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Departments",
        "View Roles",
        "View Employees",
        "Update Employee Roles"
    ]
}
exports.addDepartmentQ = {
    name: "department_name",
    type: "input",
    message: "Enter Department Name",
    validate: function(val){
        return val.length > 0
    }
}

exports.addRoleQtitle = {
    name: "title",
    type: "input",
    message: "Enter the title of the role"
}

exports.addRoleQsalary = {
    name: "salary",
    type: "input",
    message: "Enter the salary amount of the role (in decimal format)"
}

exports.addRoleQdepartmentid = {
    name: "department_id",
    type: "input",
    message: "Enter the deparment id for this role"
}


exports.addEmployeeQfirstname = {
    name: "first_name",
    type: "input",
    message: "Enter the employee's first name"
}

exports.addEmployeeeQlastname = {
    name: "last_name",
    type: "input",
    message: "Enter the employee's last name"
}

exports.addEmployeeeQroleid = {
    name: "role_id",
    type: "input",
    message: "Enter the employee's role"
}

exports.addEmployeeQmanagerid = {
    name: "manager_id",
    type: "input",
    message: "Enter the name of the employee's manager"
}