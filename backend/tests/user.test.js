// Link to Jest Docs for help: https://jestjs.io/docs/getting-started
// Run tests with "npm run test"

/**
 * @jest-environment node
 */
 require('dotenv').config();
 const axios = require('axios');
 const mongoose = require('mongoose');

describe("User Route Test", () => {
    test("delete a user", () => {
       const num1 = 1;
       const num2 = 2
  
       expect(num1 + num2).toEqual(3)
    });
 });