/**
 * Connect to localhost
 * @param {Object} httpServer - http.createServer(app)
 */
const connectToLocalhost = (httpServer) => {
    httpServer.listen(3000, () => {
        console.log('connected to 3000')
    });
}
export default connectToLocalhost;

