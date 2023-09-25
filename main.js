// "use strict"

// const abrir = document.getElementById("abrir")
// const fechar = document.getElementById("fechar")
// function abrirmenu (){
//     const header = document.getElementById("header")
//     header.classList.add("menu")
// }
// function fecharmenu(){
//     const header = document.getElementById("header")
//     header.classList.remove("menu")
// }
// abrir.addEventListener("click", abrirmenu)
// fechar.addEventListener("click", fecharmenu)

'use strict'

const abrir = document.getElementById('abrir')
const fechar = document.getElementById('fechar')

function abrirMenu (){
    const header = document.getElementById('header')
    header.classList.add('menu')
}

function fecharMenu(){
    const header = document.getElementById('header')
    header.classList.remove('menu')
}

abrir.addEventListener('click', abrirMenu)
fechar.addEventListener('click', fecharMenu)