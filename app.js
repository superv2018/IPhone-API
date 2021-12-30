const express = require('express')
const app = express()

const db = require('./db')

const PORT = 8081


app.set('port', process.env.PORT || PORT)



app.get('/', async (req, res, next) => {
    try {
        const getAllIphone = await db.query('SELECT * FROM iphone')
        res.status(200).json(getAllIphone.rows)
        
    }
    catch(err) {
        console.log(err)
    }
    
})

app.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const oneIphoneData = await db.query('SELECT * FROM iphone WHERE iphone_id = $1', [id]);
        res.status(200).json(oneIphoneData.rows)
    }
    catch(err) {
        console.log(err)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})