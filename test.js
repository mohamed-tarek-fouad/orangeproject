
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
    for(let i=0;i<users.length;i++){
        console.log(users[i].firstname,users[i].password)
        if(users[i].firstname==firstname2 &&users[i].password==password2 ){
            res.status(200).json({
                "messege":"sucessfull login",
                "Data":users
            })
        }else{
            res.status(400)
            break
        }
    }
   
    
})
app.listen(port,(req,res)=>{
    console.log(`app.listen at http://localhost:${port}`)
})
//xddd








