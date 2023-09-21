const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handling incoming data
  conn.on("data", (data) => {
    console.log(data);
  });

  //printing a message when the connection is successfully established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    //Sending our initials for the game to the server
    conn.write("Name: HSB");
  });

  return conn;
};

module.exports = {
  connect,
};
