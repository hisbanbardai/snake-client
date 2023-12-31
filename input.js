const { MOVEMENT_KEYS, SPECIAL_KEYS } = require("./constants");

// Stores the active TCP connection object.
let connection;

//Stores the timer against active movement (WASD) key
let timer = false;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  //terminate the game if user presses ctrl+c
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }

  //Sending command string to the server according to which ever key is pressed
  if (MOVEMENT_KEYS[key]) {
    if (timer) {
      clearInterval(timer);
      timer = false;
    }
    timer = setInterval(() => {
      connection.write(MOVEMENT_KEYS[key]);
    }, 100);
  } else if (SPECIAL_KEYS[key]) {
    connection.write(SPECIAL_KEYS[key]);
  }
};

module.exports = {
  setupInput,
};
