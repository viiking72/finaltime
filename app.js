const express=require("express")
const collection = require("./mongo")
const cors = require("cors")

const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/login",cors(),(req,res)=>{

})

app.post("/login",async(req,res)=>{
    const{email}=req.body;
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }else{
            res.json("notexist")
        }
    }catch(err){
        console.log(err);
        res.json("Kripya codes ko dekhe")
        
    }
})

app.post("/signup",async(req,res)=>{
    const {email}=req.body;
    const data={
        email:email
    }
    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("exist")
        }else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }catch(e){
        res.json("fail");
        console.log(e)
        
    }
})

app.listen("3001",()=>{
    console.log("Port shuru ho chuka hai.")
})

