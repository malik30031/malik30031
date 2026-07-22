const http = require("http");
const WebSocket = require("ws");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Malik Hub Chat Server Online");
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    console.log("[Malik Hub] Client Connected");

    ws.on("message", (message) => {
        console.log("[Malik Hub] " + message.toString());

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    ws.on("close", () => {
        console.log("[Malik Hub] Client Disconnected");
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Malik Hub Chat Server is running on port ${PORT}`);
});
