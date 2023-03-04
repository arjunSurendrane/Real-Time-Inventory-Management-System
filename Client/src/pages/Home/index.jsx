import React, { useEffect } from "react";
import InventoryTable from "../../component/Home/body";
import Navbar from "../../component/Home/navbar";
import socketIoClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";
const socket = socketIoClient(ENDPOINT, { auth: { token: 123 } });

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <InventoryTable socket={socket} />
    </div>
  );
}
