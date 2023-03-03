
/**
 * Handle events
 * @param {Object} io - Socket.io Server
 */
export const socketEvent = (io) => {
    io.on("connection", (socket) => {
        console.log(socket.id)
    });
}