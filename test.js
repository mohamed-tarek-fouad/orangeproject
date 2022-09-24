
const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const port=3000
let users=[]
app.use(bodyParser.json())
app.post("/register",(req,res)=>{
    const {firstname,password}=req.body
    users.push({firstname,password})
    res.status(200).json({
        "messege":"register success",
        "Data":users
    })
})
app.post("/login",(req,res)=>{
    let {firstname2,password2}=req.body
    if(firstname2==users.firstname && password2==users.password){
        res.status(200).json({
            "messege":"sucessfull login",
            "Data":users
        })
    }
})
app.listen(port,(req,res)=>{
    console.log(`app.listen at http://localhost:${port}`)
})









