const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000

const productRoutes = require("./routes/product")

app.get("/", (req , res) => {
    res.send ("Hi , I am live")
}  )

// Middleware to set routers

app.use ("/api/products" , productRoutes)



const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} I am Start`);
        })
        
    } catch (error) {
        console.log(error);
    }
} 
start()