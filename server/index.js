import express from "express";

const app = express();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
