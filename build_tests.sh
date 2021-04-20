cd backend
npm install
cd ../frontend
npm install

cd ../backend
node server.js &
export BACKEND_PID=$!
cd ../frontend
npm start &
export FRONTEND_PID=$!

cd ../backend
npm run test
if [ $? -ne 0 ] 
then
    exit 1
fi

cd ../frontend
npx cypress run
if [ $? -ne 0 ] 
then
    exit 1
fi

kill $BACKEND_PID
kill $FRONTEND_PID