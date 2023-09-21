// Stores the active TCP connection object.
let connection;

const w = "Move: up";
const a = "Move: left";
const s = "Move: down";
const d = "Move: right";

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

//terminate the game if user presses ctrl+c
const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }

  //Sending command string to the server according to which ever key is pressed
  if (key === "w") {
    connection.write(w);
  } else if (key === "a") {
    connection.write(a);
  } else if (key === "s") {
    connection.write(s);
  } else if (key === "d") {
    connection.write(d);
  }
};

module.exports = {
  setupInput,
};
