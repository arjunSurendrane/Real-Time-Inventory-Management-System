/**
 * Connect to localhost
 * @param {Object} io - socket.io server
 * @param {Object} httpServer - http.createServer(app)
 */
const connectToLocalhost = (io, httpServer) => {
    io.on("connection", (socket) => {
        console.log(socket.id)
    });
    httpServer.listen(3000, () => {
        console.log('connected to 3000')
    });
}
export default connectToLocalhost;

