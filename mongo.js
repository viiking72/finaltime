const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/newdata")
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