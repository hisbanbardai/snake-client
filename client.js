const net = require("net");
const { IP, PORT, MOVEMENT_KEYS, SPECIAL_KEYS } = require("./constants");

// establishes a connection with the game server
const connect = function (name) {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handling incoming data
  conn.on("data", (data) => {
    console.log(`Server says: ${data}`);
  });

  //printing a message when the connection is successfully established along with the instructions to play
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    console.log("Following are the keys to move the snake: \n",MOVEMENT_KEYS);
    console.log("\nFollowing are the special keys to send canned messages to the server for everyone to see: \n",SPECIAL_KEYS);

    //Sending our initials for the game to the server
    conn.write(`Name: ${name}`);
  });

  return conn;
};

module.exports = {
  connect,
};
