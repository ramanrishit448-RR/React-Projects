import express, { response } from "express";
import axios from "axios";
const app = express();

app.get("/api/jokes", async (req, res) => {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/jokes/ten"
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching jokes:", error.message);
    res.status(500).json({ error: "Failed to fetch jokes" });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
