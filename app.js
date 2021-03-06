var orm = require('./config/orm')
const { prompt } = require('inquirer');
const {
    initialQ,
    addDepartmentQ,
    addRoleQ,
    addEmployeeQ,
    // viewDepartmentQ,
    // viewRolesQ,
    // viewEmployeesQ,
    updateEmployeeroles

} = require('./config/questions');

MainMenu();

async function MainMenu() {
    try {
        const { command } = await prompt(initialQ)
        SwitchMenu(command);
    } catch (error) {
        console.log(error)
    }
}

function SwitchMenu(command) {
    switch (command) {
        case "Add Department":
            return addDepartment();
        case "Add Role":
            return addRole();
        case "Add Employee":
            return addEmployee();
        case "View Departments":
            return viewDepartment();
        case "View Roles":
            return viewRoles();
        case "View Employees":
            return viewEmployees();
        case "Update Employee Roles":
            return
    }
}
async function addDepartment() {
    try {
        const { department_name } = await prompt(addDepartmentQ);
        orm.insertInto("department", ["department_name"], [department_name]);
        MainMenu();
    } catch (error) {
        console.log(error)
    }
}


async function addRole() {
    try {
        orm.selectFrom(["id", "department_name"], "department", async function (result) {
            const departmentArr = result.map(d => d.department_name);

            // Map creates a for-loop that returns a new array
            // Evaluate each item 'adRoleQ[i]' to see if adRole[i]].name === department name
            // Add the list of department names to the choices for that question
            // If name doesn't match, leave the question as-is
            // return each question when finished
            addRoleQ.map(q => {
                if (q.name === "department_name") {
                    q.choices = departmentArr;
                }
                return q
            })
            const { title, salary, department_name } = await prompt(addRoleQ);

            // Searches through result and return FIRST instance evaluation returns true
            const department = result.find(d => d.department_name === department_name);
            orm.insertInto("role", ["title", "salary", "department_id"], [title, salary, department.id]);
            MainMenu();
        })

    } catch (error) {
        console.log(error)
    }
}

async function addEmployee() {
    try {
        const { first_name, last_name, role_id, manager_id } = await prompt(addEmployeeQ);
        orm.insertInto("employee", ["first_name", "last_name", "role_id", "manager_id"], [first_name, last_name, role_id, manager_id]);
        MainMenu();

    } catch (error) {
        console.log(error)
    }
}

async function viewDepartment() {
    try {
        orm.selectAll("department") ;
        await MainMenu();
    } catch (error){
        console.log(error)
    }
}

async function viewRoles() {
    try {
        orm.selectAll("role") 
        await MainMenu();
    } catch (error){
        console.log(error)
    }
    
}

async function viewEmployees() {
    try {
        orm.selectAll("employee") 
        await MainMenu();
    } catch (error){
        console.log(error)
    }
}



