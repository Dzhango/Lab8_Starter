// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//isPhoneNumber
test('Testing isPhoneNumber regular', () => {
    expect(functions.isPhoneNumber("860-328-4761")).toBe(true)
});
test('Testing isPhoneNumber format', () => {
    expect(functions.isPhoneNumber("8603284761")).toBe(false)
});
test('Testing isPhoneNumber length', () => {
    expect(functions.isPhoneNumber("860-328")).toBe(false)
});
test('Testing isPhoneNumber alternate format', () => {
    expect(functions.isPhoneNumber("(860)323-2414")).toBe(true)
});

//isEmail
test('Testing isEmail', () => {
    expect(functions.isEmail("dbayandarov@gmail.com")).toBe(true)
});
test('Testing isEmail', () => {
    expect(functions.isEmail("d@gmail.com")).toBe(true)
});
test('Testing isEmail', () => {
    expect(functions.isEmail("@gmail.com")).toBe(false)
});
test('Testing isEmail', () => {
    expect(functions.isEmail("--212@gmail.com")).toBe(false)
});

//isStrongPassword
test('Testing isStrongPassword', () => {
    expect(functions.isStrongPassword("hellworld")).toBe(true)
});
test('Testing isStrongPassword', () => {
    expect(functions.isStrongPassword("password")).toBe(true)
});
test('Testing isStrongPassword', () => {
    expect(functions.isStrongPassword("123456789")).toBe(false)
});
test('Testing isStrongPassword', () => {
    expect(functions.isStrongPassword("hel")).toBe(false)
});

//isDate
test('Testing isDate', () => {
    expect(functions.isDate("11/11/2011")).toBe(true)
});
test('Testing isDate', () => {
    expect(functions.isDate("12/12/2012")).toBe(true)
});
test('Testing isDate', () => {
    expect(functions.isDate("/11/2011")).toBe(false)
});
test('Testing isDate', () => {
    expect(functions.isDate("-1/11/2011")).toBe(false)
});

//isHexColor
test('Testing isHexColor', () => {
    expect(functions.isHexColor("#123")).toBe(true)
});
test('Testing isHexColor', () => {
    expect(functions.isHexColor("#123232")).toBe(true)
});
test('Testing isHexColor', () => {
    expect(functions.isHexColor("#")).toBe(false)
});
test('Testing isHexColor', () => {
    expect(functions.isHexColor("#12")).toBe(false)
});