const fs = require('fs');
const net = require("net");
const ipaddr = "0.0.0.0";
const port = 2031;

const server = net.createServer((socket) => {
  console.log(socket.address().address + "connected.");

  const writeStream = fs.createWriteStream('./tmp/test.txt');

  // print data from client
  socket.on("data", (data) => {
    console.log(data.length);
    writeStream.write(data);
  });

  // print message for disconnect with client
  socket.on("close", () => {
    console.log("disconnected.");
    writeStream.end();
  });

  // sent message to client
  setTimeout(() => {
    // socket.write("Hello from server!");
  }, 1000);
});

server.on("error", (err) => {
  console.log("err: ", err.code);
});

server.listen(port, ipaddr, () => {
  console.log(`server listening on ${ipaddr}:${port}`);
});

