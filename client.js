const net = require("net");
const { IP, PORT } = require("./constants");

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

  //printing a message when the connection is successfully established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    //Sending our initials for the game to the server
    conn.write(`Name: ${name}`);
  });

  return conn;
};

module.exports = {
  connect,
};
