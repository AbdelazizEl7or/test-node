
const express = require("express")
const fs = require("node:fs")
const app = express()
//app.use(bodyParser.json())
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
app.get("/", (req, res) => {
    fetch('https://localhost:7025/Project?pageNumber=1&pageSize=10&sortBy=createdOn&isSortAscending=false', { method: "GET" })
        .then(response => {
            console.log(response);
            response.text().then(async (result) => {
                res.json({ status: response.status, statusText: response.statusText, result: result });
            })
        }).catch((e) => {
            res.json(e);
        })
});

app.listen(process.env.PORT || 6060, () => {
    console.log("go")
})