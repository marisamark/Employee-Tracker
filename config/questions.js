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
exports.addEmployeeQ = [
    {
        name: "first_name",
        type: "input",
        message: "Enter the employee's first name",
        validate: function (val) {
            return val.length > 0
        }
    },
    {
        name: "last_name",
        type: "input",
        message: "Enter the employee's last name",
        validate: function (val) {
            return val.length > 0
        }
    },
    {
        name: "role_id",
        type: "input",
        message: "Enter the employee's role",
        validate: function (val) {
            return val.length > 0
        }
    },
    {
        name: "manager_id",
        type: "input",
        message: "Enter the name of the employee's manager",
        validate: function (val) {
            return val.length > 0
        }
    }
]

//view department
exports.viewDepartmentQ = {
    name: "department_name_view",
    type: "list",
    message: "Select the Department you would like to view",
    choices: [],
    validate: function (val) {
        return val.length > 0
    }
}

//view roles
exports.viewRolesQ = {
    name: "roles_view",
    type: "list",
    message: "Select the role you would like to view",
    choices: [],
    validate: function (val) {
        return val.length > 0
    }
}

//view employees
exports.viewEmployeesQ = {
    name: "employees_view",
    type: "list",
    message: "Select the employee you would like to view",
    choices: [],
    validate: function (val) {
        return val.length > 0
    }
}

//update employee roles
exports.updateEmployeeroles = {
    name: "update_employee_roles",
    type: "list",
    message: "Select the employee you would like to update the role for",
    choices: [],
    validate: function (val) {
        return val.length > 0
    }
}