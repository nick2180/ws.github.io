const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3000 });

wss.on("connection", (ws, req) => {
    const origin = req.headers.origin;

    // Allow all origins
    if (origin !== "*") {
        console.log("Invalid origin:", origin);
        ws.close();
        return;
    }

    console.log("Client connected to server");
    ws.on("message", (message) => {
        console.log("Message received from client: " + message);
        ws.send("Echo message sent back from server: " + message);
    });
    ws.send(
        "Hello! Message from server. You've just connected to the server!!"
    );
});