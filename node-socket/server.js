const net = require("net");
const ipaddr = "0.0.0.0";
const port = 2031;

const server = net.createServer((socket) => {
  console.log(socket.address().address + "connected.");

  // setting encoding
  socket.setEncoding("utf-8");

  // print data from client
  socket.on("data", (data) => {
    console.log(data);
    console.log('---');
  });

  // print message for disconnect with client
  socket.on("close", () => {
    console.log("disconnected.");
  });

  // sent message to client
  setTimeout(() => {
    // socket.write("Hello from server!");
  }, 1000);

  setTimeout(() => {
    socket.destroy();
  }, 30 * 1000);
});

server.on("error", (err) => {
  console.log("err: ", err.code);
});

server.listen(port, ipaddr, () => {
  console.log(`server listening on ${ipaddr}:${port}`);
});
