import "./db.js";
import app from "./server.js";

const PORT = 4002;

const handleListening = () => {
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
