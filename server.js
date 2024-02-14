const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

app.use(express.static('public',{ index: false}));

//endpoint
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.use(express.urlencoded({extended: true}));


app.post('/' ,(req,res)=>{
    name =req.body.name
    age =req.body.age
    gender =req.body.gender
    address =req.body.address
    more = req.body.more

    let outputTowrite =`The Name of the student is ${name},${age}years old,${gender},Residence ${address}.more about him/her:${more}`
    fs.writeFileSync('otuput.txt', outputTowrite)
    const pro ={'message': "Successfully Submited"}
    res.status(200).render('index.html');
});

// //calling contact endpoint
// app.get("/index", (req, res)=>{
//     res.render('index');
//  });

app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port}`);
});