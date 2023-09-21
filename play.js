const { connect } = require("./client");
const { setupInput } = require("./input");

//Getting player's name from command line
const name = process.argv[2];

if (name) {
  console.log("Connecting ...");
  //Passing name as an argument to our connect function
  const conn = connect(name);

  //Passing connection object to setupInput so that using the same object we can tell server what to do when keys are pressed
  setupInput(conn);
} else {
  console.log("Please provide name as a command line argument");
}
