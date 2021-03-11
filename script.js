
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789"
let Ranlet2 = alphabet[Math.floor(Math.random() * alphabet.length)]


function Generate(){
   const Despos = document.getElementById("Despos");
   let Passlenght = document.getElementById("np");
   let Lenght = Passlenght.value ;

    let Ranlet = alphabet[Math.floor(Math.random() * alphabet.length)]

    for(i = 1;i < Lenght ;i++){
        Ranlet += Ranlet2
        Change()    
    }

    if(Lenght > 58){
        Passlenght.value = 10;
    }else{
       Despos.innerHTML = Ranlet;
    }
    
};


function Change(){
    Ranlet2 = alphabet[Math.floor(Math.random() * alphabet.length)]
}