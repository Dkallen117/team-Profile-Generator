const Engineer = require("../lib/engineer");

describe("Engineer", () => {

it("Should set GitHub account given constructor function", () => {

const value = "GitHubUser";
const eng = new Engineer("Bob", 1, "123@123.com", value);

expect(eng.github).toBe(value);

});

 it("Should retrieve the github username via getGitHub() function", () => {

let value = "GitHubUser";
let eng = new Engineer("Bob", 1, "123@123.com", value)

expect(eng.getGithub()).toBe(value);

 });

 it("Should return \"Engineer\" when getRole() is called", () => {

let value = "Engineer";
let eng = new Engineer("Bob", 1, "123@123.com", "GitHubUser");

 expect(eng.getRole()).toBe(value);

 });


});