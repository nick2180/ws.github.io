const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 7000 });

wss.on("connection", ws => {
    console.log("Client connected to server");
    ws.on("message", message => {
        console.log("Message received from client: " + message);
        ws.send("Echo message sent back from server: " + message);
    });
    ws.send("Hello! Message from server. You've just connected to the server!!");
});