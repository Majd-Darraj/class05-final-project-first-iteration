import express from "express";
import path from "path";

const app = express();

app.get("/api/hello", (req, res) => {
  res.send({
    hello: "world"
  });
});

app.use(express.static(path.resolve(__dirname, "..", "client")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
