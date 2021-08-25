const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/digital", (req,res) => {
    res.sendFile(__dirname + "/digital.html");
})

app.listen(3000, ()=>{
    console.log("서버 연결 완료!!");
})