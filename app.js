require('dotenv').config();

const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');

const app=express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

mongoose.Promise=global.Promise;

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true }).then(()=>
    {console.log("DB is connected");}    
).catch((err)=>{
    console.log(err);
    process.exit();
})

app.get('/',(req,res)=>{
    res.send("Welcome to the class");
});

app.use('*',(req,res,next)=>{
    res.status(404).json({"msg":"Not found"});
});

require('./routes/route')(app);

const Port=process.env.PORT||3000;

app.listen(Port,(err)=>{
    if(err) console.log(err);
    else console.log(`port is live at ${Port}`);
});