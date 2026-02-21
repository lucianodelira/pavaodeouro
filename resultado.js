function gerarResultado(){
const numeros = [];
for(let i=0;i<5;i++){
numeros.push(Math.floor(Math.random()*1000).toString().padStart(3,'0'));
}
return numeros.join(' - ');
}

function atualizar(){
const agora = new Date();
document.getElementById("horario").innerText =
"Extração das " + agora.getHours() + ":" + agora.getMinutes().toString().padStart(2,'0');
document.getElementById("resultado").innerText = gerarResultado();
}

atualizar();
setInterval(atualizar, 15000); // Atualiza a cada 15 segundos
