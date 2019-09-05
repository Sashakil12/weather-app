const request = require('request');
const geocode = require('./utils/geocode');
const forecast  =require('./utils/forecast');
const path = require('path')
const express = require('express')
const app = express();
const hbs = require('hbs')
const port = process.env.PORT||3000;
app.use(express.static(path.join(__dirname , './public')));
const viewsDirectory = path.join(__dirname , './templates/views') ;
app.set('view engine', 'hbs');
app.set('views', viewsDirectory);
hbs.registerPartials(path.join(__dirname, './templates/partials'))
console.log(path.join(__dirname, 'tempaltes/partials'))



app.get('/', (req,res)=>{
    res.render('index',{title: 'Homepage',
    credit: "Shakil"})
});

app.get('/help', (req, res)=>{
    res.render('help',{ title:"Help page",
                credit:"Shakil"})
});
app.get('/weather', (req,res)=>{
    geocode(req.query.address, (err, gres) => {
        if (!err) {
            forecast(gres.features[0].center[1], gres.features[0].center[0], (err, response) => {
                if (err) {
                    res.send({
                        error: err})
                } else {
                    res.send(
                        {data: response, 
                        placeName: gres.features[0].place_name})
                }
            })
        } else {
            res.send({error: err})
        }
    })});
app.get('/about', (req,res)=>{
    res.render('about', {
        title: "About page",
        credit:"Shakil"
    })
})










app.listen(port, (req,res)=>{
    console.log('alive')
})

