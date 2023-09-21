const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // const moveUp = () => {
  //   return new Promise((resolve, reject) => {
  //     conn.on("connect", () => {
  //       setTimeout(() => {
  //         conn.write("Move: up");
  //         return resolve("Snake moved up");
  //       }, 3000);
  //     });
  //   });
  // };

  // const moveRight = () => {
  //   return new Promise((resolve, reject) => {
  //     conn.on("connect", () => {
  //       setTimeout(() => {
  //         conn.write("Move: right");
  //         return resolve("Snake moved right");
  //       }, 5000);
  //     });
  //   });
  // };

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handling incoming data
  conn.on("data", (data) => console.log(data));

  //printing a message when the connection is successfully established
  conn.on("connect", () =>
    console.log("Successfully connected to game server")
  );

  //Sending our initials for the game to the server
  conn.on("connect", () => conn.write("Name: HSB"));


  //Sending our moves to the server to move the snake

  // moveUp()
  //   .then((data) => console.log(data))
  //   .then(moveRight)
  //   .then((data) => console.log(data));

  return conn;
};

module.exports = {
  connect,
};
