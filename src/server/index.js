const express=require('express')
const dotenv=require('dotenv').config()
const app=express()
const router=require('./routes/routes')
const notebook_model=require('./models/notebook_model')

const PORT=process.env.PORT
console.log(process.env.DB)
app.use(express.json())
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/',(req,res)=>{
    res.status(200).send('Hello')
})

app.use('/api',router)

// app.get('/notebooks',(req,res)=>{
//     notebook_model.getNotebooks()
//     .then(response=>{
//         res.status(200).send(response);
//     })
//     .catch(error=>{
//         res.status(500).send(error);
//     })
// })



app.listen(PORT,()=>{
    console.log(`running on ${PORT}`)
})