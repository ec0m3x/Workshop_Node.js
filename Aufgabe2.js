//ZIEL: Zuerst startet das Hauptprogramm, danach die langsame Operation
//Das Hauptprogramm läuft danach weiter und die zusätzliche Aufgabe wird gestartet
//Diese wird nach der langsamen Operation fertig

//EventEmitter Modul importieren

//Neues EventEmitter Objekt anlegen


const slowOperation = () => {
    console.log('Starte langsame Operation...');

    setTimeout(() => {
        const result = 'Langsame Operation abgeschlossen!';
        //Event auslösen, wenn langsame Operation abgeschlossen ist
        
    }, 3000);
};

const additionalTask = () => {
    console.log('Zusätzliche Aufgabe wird jetzt erledigt...');

    setTimeout(() => {
        const result = 'Zusätzliche Aufgabe abgeschlossen!';
        //Event auslösen, wenn zusätzliche Aufgabe abgeschlossen ist
        
    }, 4000);
};

//EreignisListener, für das Ereignis "operationComplete", mit Übergabe der Variable result
 => {
    console.log(result);
});
//EreignisListener, für das Ereignis "additonalTaskComplete", mit Übergabe der Variable result
 => {
    console.log(result);
});

//Start des Hauptprogramms und der weiteren Aufgaben

