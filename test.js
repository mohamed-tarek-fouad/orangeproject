
const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const port=3000
let users=[]
app.use(bodyParser.json())
app.post("/register",(req,res)=>{
    const {firstname,password}=req.body
    id=users.length+1
    users.push({firstname,password,id})
    res.status(200).json({
        "messege":"register success",
        "Data":users
    })
})

app.patch("/patch/:id",(req,res)=>{
    let {firstname2,password2}=req.body
    for(let i=0;i<users.length;i++){
        
        if(users[i].id==id){
            users[i].firstname=firstname2
            users[i].password=password2
            res.status(200).json({

                messege:"success",
                Data:users
            })
        }
    }res.status(400).json({messege:"cant update"})
})
app.delete("/delete/:id",(req,res)=>{
    for(let i=0;i<users.length;i++){
        if(users[i].id==id){
            users.pop(i)
            res.status(200).json({
                messege:"success",
                Data:users
            })
        }
    }res.status(400).json({messege:"cant delete"})
})



app.listen(port,(req,res)=>{
    console.log(`app.listen at http://localhost:${port}`)
})
//test








