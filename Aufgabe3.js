//express-modul importieren
const express = require('express');

//Express-Anwendung erstellen


//Logger Middleware einfügen


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/name', (reg, res) => {
    //Baue einen absichtlichen Fehler ein
    res.send('Name')
})

// Error Handling Middleware


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
