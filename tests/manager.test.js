
const Manager = require("../lib/manager");

describe("Manager", () => {

it("Should set office number given constructor function", () => {

const value = "50";
const mgr = new Manager("Bob", 1, "123@123.com", value);

expect(mgr.officeNumber).toBe(value);

});

 it("Should retrieve the office number via getGitHub() function", () => {

let value = "50";
let mgr = new Manager("Bob", 1, "123@123.com", value)

expect(mgr.getOfficeNumber()).toBe(value);

 });

 it("Should return \"Manager\" when getRole() is called", () => {

let value = "Manager";
let mgr = new Manager("Bob", 1, "123@123.com", 50);

 expect(mgr.getRole()).toBe(value);

 });


});