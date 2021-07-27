const Employee = require("../lib/Employee");

describe("Employee", () => {

  it("should instantiate a new Employee object", () => {
    const e = new Employee();
    expect(typeof(e)).toEqual("object");
  });
  
  it("should set the name based on the constructor argument", () => {
    const name = "Bob";
    const e = new Employee(name);
    expect(e.name).toEqual(name);
  });
  
  it("should set the ID", () => {
    const value = 1;
    const e = new Employee("Bob", value);
    expect(e.id).toEqual(value);
  });
  
  it("Can set email via constructor argument", () => {
    const value = "123@123.com";
    const e = new Employee("Bob", 1, value);
    expect(e.email).toEqual(value);
  });
  
  it("should retrieve name via getName()", () => {
    const value = "Bob";
    const e = new Employee(value);
    expect(e.getName()).toEqual(value);
  });
  
  it("should retrieve the id via getId()", () => {
    const value = 5;
    const e = new Employee("Bob", value);
    expect(e.getId()).toEqual(value);
  });
  
  it("should retrive the email via getEmail()", () => {
    const value = "test@test.com";
    const e = new Employee("Bob", 1, value);
    expect(e.getEmail()).toEqual(value);
  });
  
  it("should return \"Employee\" when getRole() is called", () => {
    const value = "Employee";
    const e = new Employee("Bob", 1, "123@123.com");
    expect(e.getRole()).toEqual(value);
  });

});