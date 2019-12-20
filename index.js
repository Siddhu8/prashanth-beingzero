const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(__dirname + '/public/html/index.html'))
var obj={}
obj.name = "Prashanth";
obj.college = "CMRCET";
obj.regno = "17H51A0518";

app.get('/data', (req, res) => res.json(obj))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))