const mongodb=require("mongodb")
const mongoose=require("mongoose")


 exports.dbconnection=()=>{
   
try {
    mongoose.connect(process.env.mongo_url)
    console.log("db connected successfully ")
    
} catch (error) {
    console.log ( "server err", error)
}
   

}