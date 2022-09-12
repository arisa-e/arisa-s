const express = require("express")
const cors = require("cors")
const mongoose= require("mongoose")

const PORT= 5000
const app = express()
const productRouter = require("./routes/productsRoute")

var corsOptions={
    origin:"http://localhost:3000"
}

app.use(express.json())
app.use(cors(corsOptions))

mongoose.connect("mongodb+srv://arisa-s:arisa34132990@arisa.jpkbtfv.mongodb.net/tasty", {
    useNewUrlParser: true,
    useUnifiedtopology: true
}).then(()=>{
    console.log("DB connected successfully")
}).catch((err)=>{
    console.log(err.message)
})

app.get("/", (req, res)=>{
    res.json("Welcome to Arisa-s")
})

app.use('/api', productRouter)

app.listen(PORT, ()=>{
    console.log(`Server running on port : ${PORT}`)
})  