console.log("NODEJS");
const express = require("express");
const app = express();


app.listen(8000,()=>{
    console.log("connected,[Listening to port 8000]")
})
//? use method consising of request and response - send method returns the details 

// app.use((req,res)=>{
//     console.log("HIT !")
//     console.log('req :>> ', req);
//     res.send("<h3>Successfully connected</h3> Return HIT ☺ !!")

// })

//? get method use for routing 

app.get('/',(req,res)=>{
    res.send('Homepage')
})

app.get('/search', (req, res) => {
    console.log('req :>> ', req);
    // console.log('res :>> ', res);
    const { q } = req.query;
    console.log('q :>> ', q);
    res.send(`<h3>Query name return ${q}</h3>`)
})

app.get('/r/:subred/:postId', (req, res) => {
    console.log('req.params :>> ', req.params);
    let {subred , postId} = req.params;
    res.send(`<h3>Access postid: + ${postId} ,Access Subredit:${subred}</h3 >`)
})

app.get('/Main', (req, res) => {
    res.send('this is Main')
})



app.post('/Main',(req,res)=>{res.send("Response from post!!")})
app.get('/Info', (req, res) => {
    res.send('this is info')
})
app.get('*', (req, res) => {
    res.send('Something went wrong !!')
})


//? express path parameters


// -----------------
const time = () =>{
    console.log("Hey Time");
};
const greet = () =>{
    console.log("Well Done!!");
};
// -----------------

module.exports.time = time;
module.exports.greet = greet;