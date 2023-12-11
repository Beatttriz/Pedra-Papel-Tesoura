// Importando elementos do HTML
const pedraElement = document.querySelector("button[name=pedra]")
const papelElement = document.querySelector("button[name=papel]")
const tesouraElement = document.querySelector("button[name=tesoura]")
const jogadorElement = document.querySelector("img[name=jogador]")
const botElement = document.querySelector("img[name=bot]")
const score1Element = document.querySelector("#score1")
const score2Element = document.querySelector("#score2")
const resultElement = document.querySelector("p[name=result]")
// Itens do jogo
// Sendo 0 = Pedra, 1 = Papel e 2 = Tesoura
const itens = ["Pedra", "Papel", "Tesoura"]

let contadorJogador = 0
let contadorPc = 0
// Função para alterar o score
function alterarScore(){
    score1Element.innerHTML = `${contadorJogador}`
    score2Element.innerHTML = `${contadorPc}`
}
// Adicionando eventos de click
papelElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'imagens/papel_.png'
    switch(bot){
        case 0:
            botElement.src = 'imagens/pedra_.png'
            resultElement.innerHTML = "Resultado: Você venceu!"
            contadorJogador++
            break
        case 1:
            botElement.src = 'imagens/papel_.png'
            resultElement.innerHTML = "Resultado: empate."
            break
        case 2:
            botElement.src = 'imagens/tesoura_.png'
            resultElement.innerHTML = "Resultado: Você Perdeu..."
            contadorPc++
            break
    }
    alterarScore()
})

tesouraElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'imagens/tesoura_.png'
    switch(bot){
        case 0:
            botElement.src = 'imagens/papel_.png'
            resultElement.innerHTML = "Resultado: Você venceu!"
            contadorJogador++
            break
        case 1:
            botElement.src = 'imagens/pedra_.png'
            resultElement.innerHTML = "Resultado: Você Perdeu..."
            contadorPc++
            break
        case 2:
            botElement.src = 'imagens/tesoura_.png'
            resultElement.innerHTML = "Resultado: empate."
            break
    }
    alterarScore()
})

pedraElement.addEventListener("click", () => {
    var bot = Math.floor(Math.random() * 3)
    jogadorElement.src = 'imagens/pedra_.png'
    switch(bot){
        case 0:
            botElement.src = 'imagens/pedra_.png'
            resultElement.innerHTML = "Resultado: empate."
            
            break
        case 1:
            botElement.src = 'imagens/papel_.png'
            resultElement.innerHTML = "Resultado: Você Perdeu..."
            contadorPc++
            break
        case 2:
            botElement.src = 'imagens/tesoura_.png'
            resultElement.innerHTML = "Resultado: Você venceu!"
            contadorJogador++
            break
    
    }
    alterarScore()
})