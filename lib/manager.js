const Employee = require("./employee")


class Manager extends Employee {
    constructor (name, id, email, officeNum){
        super (name, id, email)
        this.officeNum = officeNum
        this.title = "Manager"
    }

    getRole(){
        return this.title;
    }

    getOfficeNumber(){
        return this.officeNum;
    }

}

module.exports = Manager;