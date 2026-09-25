const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "TradeGuru AI Backend",
    status: "online",
    mode: "paper-trading",
    message: "TradeGuru AI backend is running."
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    service: "tradeguru-ai-backend"
  });
});

app.get("/api/config-status", (req, res) => {
  res.json({
    smartApiConfigured: Boolean(
      process.env.ANGEL_API_KEY &&
      process.env.ANGEL_CLIENT_CODE
    ),
    liveMarketData: false
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`TradeGuru AI backend listening on port ${PORT}`);
});
