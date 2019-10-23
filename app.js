var orm = require('./config/orm')
const { prompt } = require('inquirer');
const { 
    initialQ, 
    addDepartmentQ,
    addRoleQ, 
} = require('./config/questions');

MainMenu();

async function MainMenu() {
    try {
        const { command} = await prompt(initialQ)
        SwitchMenu(command);
    } catch (error) {
        console.log(error)
    }
}

function SwitchMenu(command){
    switch(command){
        case "Add Department":
            return addDepartment();
        case "Add Role":
            return addRole1();
        case "Add Employee":
            return
    }
}
async function addDepartment(){
    try {
        const { department_name } = await prompt(addDepartmentQ);
        orm.insertInto("department", ["department_name"], [department_name])
    } catch (error) {
    }
}

async function addRole1() {
    try {
        const {title} = await prompt (addRoleQ1);
        orm.insertInto("role", ["title"], [title])
    } catch (error) {
    }
}

async function addRole2() {
    try {
        const {title} = await prompt (addRoleQ2);
        orm.insertInto("role", ["title"], [title])
    } catch (error) {
    }
}



