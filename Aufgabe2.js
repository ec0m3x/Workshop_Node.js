//ZIEL: Zuerst startet das Hauptprogramm (als Ausgabe im Terminal), danach die langsame Operation
//Das Hauptprogramm läuft danach weiter (als Ausgabe im Terminal) und die zusätzliche Aufgabe wird gestartet
//Diese wird nach der langsamen Operation fertig

//EventEmitter Modul importieren
const EventEmitter = require('events');
//Neues EventEmitter Objekt anlegen
const eventEmitter = new EventEmitter();

const slowOperation = () => {
    console.log('Starte langsame Operation...');

    setTimeout(() => {
        const result = 'Langsame Operation abgeschlossen!';
        //Event auslösen, wenn langsame Operation abgeschlossen ist
        eventEmitter.emit('operationComplete', result);

    }, 3000);
};

const additionalTask = () => {
    console.log('Zusätzliche Aufgabe wird jetzt erledigt...');

    setTimeout(() => {
        const result = 'Zusätzliche Aufgabe abgeschlossen!';
        //Event auslösen, wenn zusätzliche Aufgabe abgeschlossen ist
        eventEmitter.emit('additonalTaskComplete', result);

    }, 4000);
};

//EreignisListener, für das Ereignis "operationComplete", mit Übergabe der Variable result
eventEmitter.on('operationComplete', (result) => {
    console.log(result);
    //Starte zusätzliche Aufgabe
    additionalTask();
});
//EreignisListener, für das Ereignis "additonalTaskComplete", mit Übergabe der Variable result
eventEmitter.on('additonalTaskComplete', (result) => {
    console.log(result);
});

//Start des Hauptprogramms und der weiteren Aufgaben
slowOperation();
console.log('Hauptprogramm läuft weiter...');
