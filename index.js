const express = require("express");
const billsRoute = require("./routes/bill");

// settings
const app = express();
const PORT = process.env.PORT || 3000;
app.set("token", process.env.TOKEN || "recipeT0k3n");
app.listen(PORT, () => console.log(`Escuchando en puerto", ${PORT}`));

// middlewares
app.use(express.json());
app.use("/api", billsRoute);

// routes
app.get("/", (req, res) => {
  res.send("InfoBase API");
});

