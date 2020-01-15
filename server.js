const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const Stream = require("node-rtsp-stream-es6");

const webSocketsServerPort = 8000;
const webSocketServer = require("websocket").server;
const http = require("http");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const server = http.createServer();
server.listen(webSocketsServerPort);
const wsServer = new webSocketServer({
  httpServer: server
});

const options = {
  name: "aotDemo",
  url: "rtsp://admin:Aottech123@216.232.132.54:554/Streaming/Channels/101",
  // url: "rtsp://192.168.7.69:8000/h264_ulaw.sdp",
  port: 9999
};

stream = new Stream(options);
// stream.start();

app.post('/payload', (req, res) => {
  console.log(req.body);
  res.json(req.body);
})

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname + "/views/index.html"));
// });
app.use(express.static("frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log("\x1b[35m%s\x1b[0m", `Server listening on port:${port}`)
);
