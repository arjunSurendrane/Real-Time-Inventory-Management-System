import socketIoClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";


export const createWebSocket = () => {
    const socket = socketIoClient(ENDPOINT, { auth: { token: 123 } });
    socket.on("fromApi", (data) => {
        console.log(data);
    });
}


