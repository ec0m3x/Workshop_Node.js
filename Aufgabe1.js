// https-Modul importieren

// express-Modul importieren

const selfsigned = require('selfsigned');


const attrs = [{name: 'commonName', value: 'localhost'}];
const pems = selfsigned.generate(attrs, {days: 1});

//Erstelle eine Express-Anwendung


//Definiere eine einfache Route


https.createServer({
     //Privaten Schlüssel übergeben
    // Zertifikat übergeben
}, app).listen(3000, () => {
    //Ausgabe des Servers
    
});
