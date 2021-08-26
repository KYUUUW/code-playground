const delay = require("delay");
const net = require("net");

(async () => {
  for (let i = 0; i < 10; i++) {
    const socket = net.connect({
      port: 2031,
      host: "192.168.31.173",
    });
    socket.setEncoding("utf-8");

    socket.on("connect", async () => {
      console.log("connected to server");

      socket.on("data", (data) => {
        console.log(data);
      });

      socket.on("close", () => {
        console.log("disconnected.");
      });
      socket.destroy();

    });

    await delay(1000);
  }
})();

function test() {
  const socket = net.connect({
    port: 9100,
    host: "192.168.31.22",
  });

  // setting encoding
  socket.setEncoding("utf-8");

  socket.on("connect", () => {
    console.log("connected to server");

    // send message to server
    setTimeout(() => {
      socket.write("msg from client");
      console.log("data sent");
    }, 1000);

    setTimeout(() => {
      socket.destroy();
      console.log("socket destroy");
    }, 5000);
  });

  socket.on("data", (data) => {
    console.log(data);
  });

  socket.on("close", () => {
    console.log("connection closed");
  });

  socket.on("error", (err) => {
    console.log(err);
  });
}
