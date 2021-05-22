const { json } = require('express');
const express = require('express');
const Joi = require('joi')

const app = express();

app.use(express.json());

const courses = [
    {id:1, name:'fff'},
    {id:2, name:'ffasff'},
    {id:3, name:'fggff'},
]

app.get('/', (req, res)=>{

    res.send('Hello world');

});


app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

app.get('/api/courses/:id', (req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(400).send('The course not found');
    res.send(course);
})

// app.get('/api/posts/:year/:month', (req, res)=>{
//     res.send(req.query)
// })


app.post('/api/courses', (req,res)=>{

    const error = validateCourse(req.body);

    if(error !== undefined){
        res.status(400).send(error.message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});


app.put('/api/courses/:id', (req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send('The course not found');
        return;
    }


    const error = validateCourse(req.body);
    if(error !== undefined){
        res.status(400).send(error.message);
        return;
    }
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course not found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);

});

const validateCourse = (course)=>{
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const {error} = schema.validate(course);
    return error;
}

const port = process.env.PORT || 3000;

app.listen(port, ()=>{console.log(`listening to port ${port}...`)});