const express = require("express");
const app = express();
const conn = require("./db");
const cors =require("cors");



conn.connection.on("connected", (err) => {
    if(err){
        console.error(err);
    }else{
        console.log("Connected to mongooDB");
    }
});
app.use(cors());
app.use(express.json());
app.use("/user",require("./routes/user"));



// // 1.
// app.get("/", (req, res) => {
//     console.log("We got a request");

//     res.send("Hello");
// });

// // app.get("/?name =onkar",(req, res) => {
// //     const data = req.params.name;

// //     res.send(`Hello! ${data}`);


// // });



// app.get("/products/:id",(req, res) => {
//     const productsID = req.params.id;
//     res.send(`${productsID}`);
//     console.log(productsID);

// })













//--------------------------------------------------------------------------------------
// for create a Express server 

app.listen(5000, () => {
    console.log("Server  is Start");

})