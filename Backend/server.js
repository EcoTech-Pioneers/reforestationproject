const express =require('express')
const helmet=require('helmet')
const cors=require('cors')
const bodyParser=require('body-parser')


const app=express()

app.use(express.json())

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public', { 'Content-Type': 'application/javascript' }));

app.use(helmet())

app.listen(process.env.PORT,()=>{
    console.log("SERVER Running on Port")
})