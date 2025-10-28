const express = require('express');
const path    = require('path');
const app  = express();
const port = 3015;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port} ... \n`);
});

app.get('/', (req, res) => {
    // console.dir(req)
    // res.send(`This is what you requested: ${req}`)
    res.render('home.ejs')
})

app.get('/all_stars', (req, res) => {
    const stocks = ["tsx:bdt", "tsx: gys", "tsx:ftt"];
    res.render('all_stars.ejs', { stocks })
})


// app.use(express.urlencoded);
// app.use(express.json);


// app.use((req, res) => {
//     // console.log("CONSOLE: we got your request");
//     console.log(req.query);
//     console.log();
//     const { values } = req.query ;
//     console.log(`Values: ${values}`);
//     console.log(`Values: ${values['name']}`);
//     console.log(`Values: ${values.color}`);
//     res.send({ "BROSWER": "Chrome", "Message": "Hey there!" })
// })

// // console.dir(app);

