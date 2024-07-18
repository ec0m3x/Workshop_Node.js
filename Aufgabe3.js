//express-modul importieren
const express = require('express');

//Express-Anwendung erstellen
const app = express();

//Logger Middleware einfügen
app.use((req, res, next) => {
    console.log('eine Anfrage wurde gemacht');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/name', (reg, res) => {
    //Baue einen absichtlichen Fehler ein
    console.log(undefinedVariable);
    res.send(Name)

})

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
