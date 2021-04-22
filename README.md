http://cloudhaven.net

## Setup:
`git clone https://github.com/CPSECapstone/CloudHaven.git`

at this point, you will need to set up a .env file in backend/. See the 'Env' Section for what variables you need.\

Run `npm install` in /backend and `yarn install` in /frontend to install dependencies

## Running CloudHaven
`yarn start` in /frontend to run frontend

`npm start` in /backend to run backend

## Env:
A .env file in /backend is required to store secrets. The variables you must include are:  
**ACCESS_PRIV_KEY**=access token secret, should be a generated string of at least 60 characters  
**REFRESH_PRIV_KEY**=refresh token secret, should be a generated string of at least 60 characters  
**DB_USER**=mongoDb username  
**DB_PASS**=mongoDb password  
**DB_CLUSTER**=mongoDb cluster target

the mongoDb variables appear as follows in the connection url: mongodb+srv://<**DB_USER**>:<**DB_PASS**>@<**DB_CLUSTER**>?retryWrites=true&w=majority

## Testing:
`./build_tests.sh` will run tests for both backend and frontend