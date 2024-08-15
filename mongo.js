const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://vsingh0699572:Vsingh71@cluster0.2qz2a.mongodb.net/")
.then(()=>{
    console.log("Database connect ho chuka hai.")
})
.catch(()=>{
    console.log("Database connect naa ho saka")
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)
module.exports= collection
