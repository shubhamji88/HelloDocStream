const express = require('express')
const app = express()
const port = 3003
const bodyParser = require('body-parser');
app.use('/', express.static('public'));
app.set("view engine","ejs");

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// support parsing of application/json type post data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send("hii")
})

app.post('/getimg', (req, res) => {
    console.log(req.body)
    // console.log("its a hit");
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})