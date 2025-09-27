let nome = "Metatron"
let Xp = 0

for(contador = 1; contador <= 10;contador++){
    Xp+=501
}

if(Xp < 1000){
    console.log(nome + " chegou no nível Ferro")
}
else if( (Xp > 1001) && (Xp <2000)){
    console.log(nome + " chegou no nível Bronza")
}
else if( (Xp > 2001) && (Xp <5000)){
    console.log(nome + " chegou no nível Prata")
}
else if( (Xp > 5001) && (Xp <7000)){
    console.log(nome + " chegou no nível Ouro")
}
else if( (Xp > 7001) && (Xp <8000)){
    console.log(nome + " chegou no nível Platina")
}
else if( (Xp > 8001) && (Xp <9000)){
    console.log(nome + " chegou no nível Ascendente")
}
else if( (Xp > 9001) && (Xp <10000)){
    console.log(nome + " chegou no nível Irmotal")
}
else if(Xp >= 10001){
    console.log(nome + " chegou no nível Radianta")
}

console.log(Xp)