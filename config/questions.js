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
//add department
exports.addDepartmentQ = {
    name: "department_name",
    type: "input",
    message: "Enter Department Name",
    validate: function (val) {
        return val.length > 0
    }
}

exports.addRoleQ = [
    {
        name: "title",
        type: "input",
        message: "Enter the title of the role",
        validate: function (val) {
            return val.length > 0
        }
    },
    {
        name: "salary",
        type: "input",
        message: "Enter the salary amount of the role (in decimal format)",
        validate: function (val) {
            return !isNaN(val)
        }
    },
    {
        name: "department_name",
        type: "rawlist",
        message: "Department for role?",
        choices: []
    }
]

//add employee
exports.addEmployeeQfirstname = {
    name: "first_name",
    type: "input",
    message: "Enter the employee's first name",
    validate: function (val) {
        return val.length > 0
    }
}

exports.addEmployeeeQlastname = {
    name: "last_name",
    type: "input",
    message: "Enter the employee's last name",
    validate: function (val) {
        return val.length > 0
    }
}

exports.addEmployeeeQroleid = {
    name: "role_id",
    type: "input",
    message: "Enter the employee's role",
    validate: function (val) {
        return val.length > 0
    }
}

exports.addEmployeeQmanagerid = {
    name: "manager_id",
    type: "input",
    message: "Enter the name of the employee's manager",
    validate: function (val) {
        return val.length > 0
    }
}

//view department
exports.viewDepartmentQ = {
    name: "department_name_view",
    type: "list",
    message: "Select the Department Name you would like to view",
    choices: [],
    validate: function (val) {
        return val.length > 0
    }
}

