import { useEffect, useState } from "react";
import { createWebSocket } from "./api/socket";

function App() {
  useEffect(() => {
    createWebSocket();
  }, []);
  const [response, setResponse] = useState("");
  return <div>App</div>;
}

export default App;
