const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];


let x = 9
let y = 0
let posicaoItemMapa = map[x][y]
let bloco
let espaco
let inicio 
let chegada
let posicaoBloco
function mostraLabirinto(){
    for(let i = 0; i < map.length; i++){
        jogo = document.getElementById("jogo")
       let linha = map[i]
       for(let letra = 0; letra < linha.length; letra++){
           if(linha[letra] === "W"){
               bloco = document.createElement('div')
               bloco.className = "parede"
               jogo.appendChild(bloco)
              
           }
           if(linha[letra] === " "){
               espaco = document.createElement('div')
               espaco.className = "espaco"
               jogo.appendChild(espaco)
   
           }
   
           if(linha[letra]=== "S"){ 
               inicio = document.createElement('div')
               inicio.className = "partida"
               jogo.appendChild(inicio)
   
           }
   
           if(linha[letra]=== "F"){
               chegada = document.createElement('div')
               chegada.className = "chegada"
               jogo.appendChild(chegada)
   
           }
       }
   }

}



let jogador = document.getElementById('player')
let jogadorBottom = 100
let jogadorLeft = 0
let ultimaPosicaoBottom = 0
let ultimaPosicaoLeft = 0
let posicao
let ultimoElemento
let buttonStart = document.getElementById("start")

buttonStart.addEventListener("click", mostraLabirinto)

document.addEventListener('keydown', (event)=> {
    const keyName = event.key;
    if(keyName === "ArrowDown" ){
        if( x <= 13){
            x += 1
            jogadorBottom -= 20
            posicaoItemMapa = map [x][y]
            if(posicaoItemMapa === "W"){
                x -= 1
                jogadorBottom += 20
            }
        }

    } 
    if(keyName === "ArrowUp"){  
        if(x >= 1){
            x -= 1
            jogadorBottom  += 20
            posicaoItemMapa = map[x][y]
            if(posicaoItemMapa === "W"){
                x += 1
                jogadorBottom -= 20
            }
        }
    }
    if(keyName === "ArrowRight"){
        if( y <= 19){
            y += 1
            jogadorLeft += 20
            posicaoItemMapa = map[x][y]
            if(posicaoItemMapa === "W"){
                y -= 1
                jogadorLeft -= 20
            }

        }
    } 
   if(keyName === "ArrowLeft"){
       if( y >= 1){
           y -= 1
           jogadorLeft -= 20
           posicaoItemMapa = map[x][y]
           if(posicaoItemMapa === "W"){
            y += 1
            jogadorLeft += 20
        }


       }
   }
   document.getElementById("player").style.bottom = jogadorBottom + "px"
   document.getElementById("player").style.left = jogadorLeft + "px"
   condicaoVitoria()
  
   
})
 
function condicaoVitoria(){
    if(posicaoItemMapa === "F"){
        alert("Você venceu")
    }
}


