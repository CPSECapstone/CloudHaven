## Description

This will start up a sample vendor app written in java on port 4040.

## How to use

To use make sure you have `mvn` installed on your local machine and that the `run` bash script has executable permission.

Then simply run `./run` and this should install dependencies, run tests and run the project if the tests pass.

Any errors will be printed and the project will not run if tests fail.

After this command succeeds simply go to localhost:4040 and the java vendor app should be up and running

## Documentation
Documentation is supplied via a Swagger portal located in the `docs` directory, with a README detailing how to access it in that directory.

The only sample vendor application in this repository is the "Sample Vendor Queries" application, as referenced by the documentation.

### Debugging
If you run into an error stating `Unknown lifecycle phase "`, run the command `cat run | sed $'s/\r//' > test` to remove carriage returns. 
Then try runing the new "test" script with `./test`, if that works replace the `run` script with the newly generated `test` script.