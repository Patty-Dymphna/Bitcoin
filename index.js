let Bit = document.getElementById("Bitown");
let Doge = document.getElementById("Dogeown");
let Lite = document.getElementById("liteown");
let Eth = document.getElementById("Etheown");
let lites = document.getElementById("litenaira");
let Eths = document.getElementById("Ethenaira");
let Doges = document.getElementById("Dogenaira");
let Bits = document.getElementById("Bitnaira");





fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cdogecoin%2Cethereum&vs_currencies=usd%2Cngn")
.then(response => response.json())
.then(data =>{
    Bit.innerHTML = data.bitcoin.usd;
    Bits.innerHTML = data.bitcoin.ngn;

    Doge.innerHTML = data.dogecoin.usd;
    Doges.innerHTML = data.dogecoin.ngn;
    
    Lite.innerHTML = data.litecoin.usd;
    lites.innerHTML = data.litecoin.ngn;

    Eth.innerHTML = data.ethereum.usd;
    Eths.innerHTML = data.ethereum.ngn;
});

function ExploreMore(){
    let name = prompt("What is your name");
    let Guess = prompt("Would you love trading with us?")
    Guess = Guess.toLowerCase();

    if(Guess==="yes"){
        alert(`Welcome Onboard ${name}`);
    }else{
        alert(`We hope you keep checking on us time to time ${name}`);
    }
}