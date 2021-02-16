const express = require("express");
const app = express();
const port = 3000 ;
const cartItems = require("./cart-items");
app.listen(port,() => console.log('Listening on port: ${port}.'));
app.use(express.json())
app.use("/cart-items", cartItems);

// app.get("/cart-items",(req,res) =>{res.json("Getting cart items")});
// app.post("/cart-items", (req, res)=> {res.json}("Adding cart items..");
// app.put("/cart-items",(req,res)=> {res.json})
