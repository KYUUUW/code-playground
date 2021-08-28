const net = require('net');
const fs = require('fs');

const IP = "0.0.0.0";
const PORT = 2031;

const server = net.createServer((socket) => {
  console.log(socket.address().address + "connected.");

  // setting encoding
  socket.setEncoding("utf-8");

  // print data from client
  socket.on("data", (data) => {
    console.log(data.length);
  });

  // print message for disconnect with client
  socket.on("close", () => {
    console.log("disconnected.");
  });

  // sent message to client
  setTimeout(() => {
    // socket.write("Hello from server!");
  }, 1000);
});

server.on("error", (err) => {
  console.log("err: ", err.code);
});

server.listen(PORT, IP, () => {
  console.log(`server listening on ${ipaddr}:${port}`);
});
