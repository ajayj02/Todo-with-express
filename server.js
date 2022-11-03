const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

let task = [
    'sample input'
]

app.get('/', (req,res)=>{
    let taskList = task.map(t => `<li>${t}</li>`).join('\n')
    res.send(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
</head>
<body>
    <form action="/" method="POST">
        <input type="text" name="newTask" id="input">
        <button type="submit">Add</button>
        <ul>
            ${taskList}
        </ul>
    </form>
</body>
</html>`
)
})

app.post('/', (req,res)=>{

    task.push(req.body.newTask)
    res.redirect('/')
})

app.listen(5555, () =>
{
    console.log("started server", __dirname);
})