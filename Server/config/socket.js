
/**
 * Handle events
 * @param {Object} io - Socket.io Server
 */
export const socketEvent = (io) => {
    io.on("connection", (socket) => {
        if (socket.handshake.auth.token == 123) {
            console.log("New client connected");
            console.log(socket.id);
            socket.emit('fromApi', new Date())
            socket.on('hai', (data) => {
                console.log(data)
            })
            socket.on("disconnect", () => {
                console.log("Client disconnected");
            });
        }
    });
}

