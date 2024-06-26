const express = require("express");
const users = require('./db.json');
const app = express();

const port = process.env.PORT || 3000;

app.get('/api/users', (req, res) =>{
    res.json(users)
})
app.get('/api/users/:id', (req, res) => {
    res.json(users.find(user => user.id === Number(req.params.id)))
})



app.get("/", (req, res) => { res.send("Hello! Node.js");});
app.get("/gg", (req, res) => { res.send("Helo ");});

app.listen(port, () => {
    console.log("Server running at http://127.0.0.1:3000/ "+ port);

    console.log("Server running at http://127.0.0.1:3000/ "+ port + '/api/users/:id');
});