
// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!

// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!

let giornoDelGiudizio = new Date("Feb 12, 2024 09:30:00").getTime();

let dayMissing = setInterval(function(){

    let now = new Date().getTime();

    let distance = giornoDelGiudizio - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("timer").innerHTML = days + " Giorno - " + hours + " Ore - "
     + minutes + " Minuti - " + seconds + " Secondi ";

    if(distance < 0) {
        clearInterval(dayMissing);
        document.getElementById("timer").innerHTML = "SIII RICOMINCIA";
    }


}, 1000)





