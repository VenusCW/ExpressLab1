const cartItems = [
    {
    id: 0, 
    product: "Shirt", 
    price: 5, 
    quantity: 1,
},
{
    id: 1 , 
    product:"Sunscreen", 
    price: 8, 
    quantity: 1,
},
{
    id:2, 
    product: "Sunglasses", 
    price:5, 
    quantity:2,
},
{
    id: 3, 
    product:"Sandals", 
    price:10, 
    quantity:1,
},
{
    id: 4, 
    product:"Shorts", 
    price:15, 
    quantity:1,
},
];

cartItems.get("/cartItems", (req,res)=>{res.json(cartItems);});
cartItems.get("/cartItems/:to", (req,res)=>{
    const item = cartItems.find();
    if(!item){
        res.status().send
    }
});



// cartItems.get("/cart-items",(req,res) =>{res.json("Getting cart items")});
// cartItems.post("/cart-items", (req, res)=> {res.json}("Adding cart items..");
// cartItems.put("/cart-items",(req,res)=> {res.json})
