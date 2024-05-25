const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send('heyy')
})




const Port=8000
app.listen(Port,()=>{
    console.log('Listening to port',Port)
})