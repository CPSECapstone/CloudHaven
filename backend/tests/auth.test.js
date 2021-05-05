/**
 * @jest-environment node
 */
 require('dotenv').config();
 const axios = require('axios');
 const mongoose = require('mongoose');
 const testEmail = 'test@gmail.com';
 const testPass= 'test';
 
 // Setup
 const baseURL = 'http://localhost:4000';
 beforeAll(async () => {
   const dbuser = process.env.DB_USER;
   const dbpass = process.env.DB_PASS;
   const dbcluster = process.env.DB_CLUSTER;
   mongoose.set('useFindAndModify', false);
   await mongoose.connect('mongodb+srv://' + dbuser 
   + ':' + dbpass 
   + '@' + dbcluster + "?retryWrites=true&w=majority", 
   {useNewUrlParser: true, 
    useFindAndModify: false, 
    useCreateIndex: true, 
    useUnifiedTopology: true });
 });
 
 // User not logged in, unauthorized services route
 test('should recieve an error', async () => {
   return await axios.get(baseURL + '/users/vendors/')
       .catch((err) => expect(err.response.status).toEqual(401));
 });
 
 // Login route
 test('should login successfully', async () => {
   return await axios.post(baseURL + '/login',
       {email: testEmail, password: testPass})
       .then((response) => {
         expect(response.status).toEqual(200);
       });
 });
 
 // Refresh token route
 test('should refresh accessToken', async () => {
   const response = await axios.post(baseURL + '/login',
       {email: testEmail, password: testPass});
   axios.defaults.headers.cookie = response.headers['set-cookie'];
   return await axios.post(baseURL + '/token')
       .then((response) => {
         expect(response.status).toEqual(200);
       });
 });
 
 // Teardown
 afterAll(() => {
   mongoose.connection.close();
 });
 