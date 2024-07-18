// Import the 'https' module
const https = require('https');

// Import the 'express' module
const express = require('express');

const selfsigned = require('selfsigned');


const attrs = [{name: 'commonName', value: 'localhost'}];
const pems = selfsigned.generate(attrs, { days: 1, keySize: 2048 });

//Erstelle eine Express-Anwendung

const app = express();

//Definiere eine einfache Route

app.get('/', (req, res) => {
    res.send('What the hell happened?');
});

https.createServer({
     //Privaten Schlüssel übergeben
        key: pems.private,
    // Zertifikat übergeben
        cert: pems.cert


}, app).listen(3000, () => {
    //Ausgabe des Servers
    console.log('Server is running on port 3000');
});
