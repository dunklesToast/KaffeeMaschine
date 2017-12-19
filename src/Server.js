const express = require('express');
const make = require('./Make');
const app = express();

app.use(express.static('public'));

app.get('/make/:size', function(req, res) {
    if(req.params.size === "big"){
        make.big().then(() => {
            res.json({size: "big", status: "started"});
        });
    } else if(req.params.size === "small"){
        make.small().then(() => {
            res.json({size: "big", status: "started"});
        });
    } else {
        res.status(404).json({err: "size " + req.params.size + " not found"})
    }
});

app.all('*', function(req, res){
    res.status(404).send('404 - Coffee not found');
});
app.listen(8081);