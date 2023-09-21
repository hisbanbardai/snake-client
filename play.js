const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const conn = connect();

//Passing connection object to setupInput so that using the same object we can tell server what to do when keys are pressed
setupInput(conn);
