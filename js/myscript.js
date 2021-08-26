/*
*   1 - chiedi all’utente il cognome
*   2 - inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
*   3 - stampa la lista ordinata alfabeticamente
*   4 - scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
*/

//punto numero 1 fatto, chiesto cognome all'utente
let listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
let mioCognome = prompt("Inserisci il tuo cognome");

//rendo maiuscola la prima lettera del cognome
if(mioCognome != (mioCognome.charAt(0).toUpperCase() + mioCognome.slice(1)) ){
    mioCognome = mioCognome.charAt(0).toUpperCase() + mioCognome.slice(1);
}

//inserisco il cognome nell'array (nella lista degli altri cognomi)
listaCognomi.push(mioCognome);

//sort la funziona che ordina alfabeticamente la lista
listaCognomi.sort();

//funzione che indica la posizione dell'elemento aggiunto, +1 poichè gli array partono da 0
let posizione = (listaCognomi.indexOf(mioCognome)) + 1;

//stampo la lista e la posizione
for(var i = 0; i < listaCognomi.length; i++){
    document.getElementById("lista-cognomi").innerHTML += "<li>" + listaCognomi[i] + "</li>";
}

document.getElementById("posizione").innerHTML = "La posizione del cognome scelto dall'utente è: " + posizione;

console.log(listaCognomi);
console.log(posizione);