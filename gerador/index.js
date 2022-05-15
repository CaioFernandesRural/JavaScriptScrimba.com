let senha1El = document.getElementById("senha1")
let senha2El = document.getElementById("senha2")
let senha3El = document.getElementById("senha3")
let senha4El = document.getElementById("senha4")

let possiveis = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','&','*','+','=','?']

function generate() {
    let senha = ''
    let tamanho = document.getElementById("tamanho").value

    for (let i = 0; i < tamanho; i++) {
        senha += possiveis[Math.floor(Math.random() * possiveis.length)]
    }
    console.log(senha)
    console.log(tamanho)
    return senha
}

function display() {
    senha1El.textContent = generate()
    senha2El.textContent = generate()
    senha3El.textContent = generate()
    senha4El.textContent = generate()
}