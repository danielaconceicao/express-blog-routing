/*Tutte le risposte saranno in json.
All'interno creare le seguenti rotte:
/ - index: ritornerà un html con una ul che stamperà la lista dei post
/:slug - show: tramite il parametro dinamico che rappresenta lo slug del post, ritornerà un json con i dati del post
Scrivere tutte le funzioni delle rotte nel controller dedicato
Registrare il router dentro app.js con il prefisso posts/. */

const express = require('express');
const app = express();


const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
    console.log(`Sserver is running at ${HOST}:${PORT}`);
});