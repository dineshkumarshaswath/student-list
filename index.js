const express =require("express")
const {dbconnection}=require("./db.js")
const studentRouter=require("./router.js")
const cors =require("cors")
const dotenv=require("dotenv")


const app=express()
app.use(express.json())
app.use(cors())
app.use("/api/",studentRouter)
dotenv.config()
dbconnection()

const PORT=process.env.port

app.get('/',(req,res)=>{
    return res.send("server  working fine")

})



app.listen(PORT,()=>console.log(`server listening to the port localhost:${PORT}`))

console.log("hi dinesh dinesgh")