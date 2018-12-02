const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hellos");
});

app.get('/numbers', (req, res) => {
    res.send([1, 2, 3]);
});

app.post('/storeData', (req, res) => {

    //json schema validation
    const schema = Joi.object().keys({
        name: Joi.string().required()
    });

    //const result = validateData(req.body);
    const { error } = validateData(req.body);

    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    res.send("success !");
});

function validateData(message) {
    const schema = Joi.object().keys({
        name: Joi.string().required()
    });

    return Joi.validate(message, schema);
}


//http://localhost:3000/courses/1?prcess=read
app.get('/courses/:id', (req, res) => {
    console.log("id:" + req.params.id);

    res.send(req.query);
});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`));