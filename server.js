const express = require('express');
const Joi = require('joi');
const app = express();

app.get("/", (req, res) => {
    res.send("hellos");
});

app.get('/numbers', (req, res) => {
    res.send([1, 2, 3]);
});

app.post('/storeData', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    console.log("result:" + result);

    const result = Joi.validate(req.body, schema);
});


//http://localhost:3000/courses/1?prcess=read
app.get('/courses/:id', (req, res) => {
    console.log("id:" + req.params.id);

    res.send(req.query);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`));