function compChoice() {
    const comp = Math.random();
    if( comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

function getWinner(comp, player) {
    if (player == comp) return 'SERI !';
    if (player == 'gajah') return(comp == 'orang') ? 'MENANG !' : 'KALAH !';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH !' : 'MENANG !';
    if (player == 'semut') return (comp == 'orang') ? 'KALAH !' : 'MENANG';
}

const pilihan = document.querySelectorAll('.boxPlayer img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComp = compChoice();
        const pilihanPlayer = pil.className;
        const winner = getWinner(pilihanComp,pilihanPlayer);
        
        const imgComputer = document.querySelector('.comp');
        imgComputer.setAttribute('src', 'img/' + pilihanComp + '.png');

        const info = document.querySelector('.info');
        info.innerHTML = winner;
    });
});

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanComp = compChoice();
//     const pilihanPlayer = pGajah.className;
//     const winner = getWinner(pilihanComp,pilihanPlayer);
    
//     const imgComputer = document.querySelector('.comp');
//     imgComputer.setAttribute('src', 'img/' + pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = winner;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanComp = compChoice();
//     const pilihanPlayer = pOrang.className;
//     const winner = getWinner(pilihanComp,pilihanPlayer);
    
//     const imgComputer = document.querySelector('.comp');
//     imgComputer.setAttribute('src', 'img/' + pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = winner;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanComp = compChoice();
//     const pilihanPlayer = pSemut.className;
//     const winner = getWinner(pilihanComp,pilihanPlayer);
    
//     const imgComputer = document.querySelector('.comp');
//     imgComputer.setAttribute('src', 'img/' + pilihanComp + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = winner;
// });