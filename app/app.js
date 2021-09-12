const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/src/public`));

app.set('view engine', 'ejs');
app.set("views", "./src/views");

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.get("/digital", (req,res) => {
    res.render("digital.ejs");
})

module.exports = app;
