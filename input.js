// Stores the active TCP connection object.
let connection;

//WASD movements
const w = "Move: up";
const a = "Move: left";
const s = "Move: down";
const d = "Move: right";

//canned messages
const h = "Say: hello, how are you?";
const l = "Say: Watch and learn :)";

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
  switch (key) {
    case "w":
      connection.write(w);
      break;

    case "s":
      connection.write(s);
      break;

    case "a":
      connection.write(a);
      break;

    case "d":
      connection.write(d);
      break;

    case "h":
      connection.write(h);
      break;

    case "l":
      connection.write(l);
      break;

    default:
      break;
  }
};

module.exports = {
  setupInput,
};
