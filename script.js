let botoes = Document.querySelectorAll(".botoes button")
botoes.forEach(botao => {
    botao.addEventListener("click", guardarNota)
})

function guardarNota(evento) {
    let nota = evento.terget.innetText

    localStorage.setItem("nota", nota)
}