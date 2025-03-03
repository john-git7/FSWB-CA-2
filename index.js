const express = require('express')
const app = express()
require('dotenv').config()
const port=8000
// const db = require('/db.js')
// db()

app.get('/', async (req, res) => {
    try{
        res.status(200).json({ message: 'success' })
    }
    catch(e){
        console.log(e);
    }
    })

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})

module.exports=app