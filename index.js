const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());


const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send('Hello from my first ever node');
}); 

const users = [
    {id:1, name: "Abul", email:"abul@gmail.com"},
    {id:1, name: "Babul", email:"babul@gmail.com"},
    {id:1, name: "Kabul", email:"kabul@gmail.com"},
    {id:1, name: "Rabul", email:"rabul@gmail.com"},
    {id:1, name: "Sabul", email:"sabul@gmail.com"}
];



app.get('/users', (req,res) =>{
const search = req.query.search;
if(search){
    const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
    res.send(searchResult);
}
else{
    res.send(users)
}
});

// app method
app.post('/users', (req,res) =>{

const newUser = req.body;
newUser.id = users.length;
users.push(newUser);

    console.log('hitting the post', req.body);
    res.json(newUser)
})


// dynamic api
app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.listen(port, () =>{
    console.log('listening', port);
});