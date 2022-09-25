
const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const port=3000
let users=[]
app.use(bodyParser.json())
app.post("/register",(req,res)=>{
    const {firstname,password}=req.body
    let check1=false
    let check2=false
    let check3=false
    let check4=false
    for(a=0;a<password.length;a++){
        console.log(check1,check2,check3,check4)
        console.log(password[a].charCodeAt())
        if(password[a].charCodeAt()>64 &&password[a].charCodeAt()<91){check1=true}//uppercase
        if(password[a].charCodeAt()>96 &&password[a].charCodeAt()<124){check2=true}//smallcase
        if(password[a].charCodeAt()>47 &&password[a].charCodeAt()<58){check3=true}//nums
        else{check4=true}
    }
    if(check1&&check2&&check3&&check4){
        id=users.length+1
    users.push({firstname,password,id})
    res.status(200).json({
        "messege":"register success",
        "Data":users
    })
    }else{res.status(400).json({message:"password is not valid"})}
    
    
})
app.post("/login",(req,res)=>{
    const{firstname,password}=req.body
    for(i=0;i<users.length;i++){
        if(users[i].firstname==firstname &&users[i].password==password){
            res.status(200).json({
                message:"login success"
            })
        }
    }res.status(400).json({message:"failed to login"})
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









