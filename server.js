const express = require('express');

const app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'hbs')

let task = [
    'sample input'
]

app.get('/', (req,res)=>{
    res.render('home', {
        Title: 'Task Manager' , 
        task
    })
})

app.post('/', (req,res)=>{
    task.push(req.body.newTask)
    res.redirect('/')
})

app.listen(5555, () =>
{
    console.log("started server", __dirname);
})