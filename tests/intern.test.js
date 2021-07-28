const Intern = require("../lib/intern");

describe("Intern", () => {

it("Should set school given constructor function", () => {

const value = "UGA";
const int = new Intern("Bob", 1, "123@123.com", value);

expect(int.school).toBe(value);

});

 it("Should retrieve school via getSchool() function", () => {

let value = "UGA";
let int = new Intern("Bob", 1, "123@123.com", value)

expect(int.getSchool()).toBe(value);

 });

 it("Should return \"Intern\" when getRole() is called", () => {

let value = "Intern";
let int = new Intern("Bob", 1, "123@123.com", "UGA");

 expect(int.getRole()).toBe(value);

 });


});