const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(cors())
const date = new Date();


const db = mysql.createConnection({
    user : "",
    password : "",
    host : "",
    database : "",
})


//init
app.get("/", (req, res) => {
    res.send(`listner on port ${PORT}`)
})

//shorten url
app.post("/api/shorten", (req, res) => {
    const { url, link_id, user_ip, user_country } = req.body
    const q = "INSERT INTO links (link, user_ip,user_country, link_id,created_at) VALUES (?, ?, ?, ?, ?)"
    db.query(q , [url, user_ip, user_country, link_id, Date],(err,results) => {
        if(err) throw new Error(err);
        if(results) res.send({message : "success", link_id : link_id})
        else{
            res.send({status : "AN ERROR OCCURED"})
        }
    })
})

app.post("/api/getShoten", (req, res) => {
    const { link_id } = req.body
    const q = "SELECT * FROM links WHERE link_id = ?"
    db.query(q , [link_id],(err,results) => {
        if(err) throw new Error(err)
        if(results.length > 0) res.send({message : "success", link : results[0].link})
        else{
            res.send({status : "404"})
        }
    })
})

app.post("/api/visit", (req, res) => {
    const {link_id, ip} = req.body;
    const q = "INSERT INTO visit (link_id, visitor_ip,visitor_country ,created_at) VALUES (?, ?, ? , ?)"
    db.query(q , [link_id, ip,"none",date], (err,results) => {
        if(err) throw new Error(err)
        if(results){
            res.send({message : "sucess"});
        }
    })
})




app.listen(PORT, () => {console.log(`listening on Port ${PORT}`)})
