import { getAllInventory } from "../services/inventory.js";
/**
 * Socket Class
 * @description create a socket class for connect to client with a websocket communication
 */
class socket {
  constructor(io) {
    io.on("connection", (socket) => {
      console.log(`Connected to cllient-${socket.id}`);
      this.socket = socket;
      socket.on("diconnect", () => {
        console.log("disconnected");
      });
      socket.on("data", (data) => {
        this.sendinventoryData();
      });
    });
  }
  /**
   * Send Inventory Date
   * @description - This function is used to send real time inventory data to client
   * @param {String} message  - It is a message that shows in client side
   */
  sendinventoryData = async (message = "Welcome") => {
    try {
      /**
       * @description getAllInventory - it is used to get inventory data
       * - it retun an array
       */
      const data = await getAllInventory();
      this.socket.emit("inventory", { data, message });
    } catch (error) {
      console.log(error);
    }
  };
}

export default socket;
