
function giocodadi(tiri){
    let giocatore1 = 0
    let giocatore2 = 0

    for ( i = 0; i < tiri; i++ ) {
        
        let giocatore1Roll = Math.floor(Math.random() * (6 + 1 - 1) + 1);
        let giocatore2Roll = Math.floor(Math.random() * (6 + 1 - 1) + 1);

        giocatore1 = giocatore1 + giocatore1Roll
        giocatore2 = giocatore2 + giocatore2Roll
    }

    if (giocatore1 > giocatore2) {
        return `il giocatore 1 vince con ${giocatore1} punti!`

    }else if (giocatore1 < giocatore2) {
        return `il giocatore 1 vince con ${giocatore2} punti!`

    } else {
        return `pareggio con ${giocatore1} punti!`
    }
}

let tiri = Number(prompt('quanti dadi lanceranno?'))
let risultato = giocodadi(tiri)
console.log (risultato)