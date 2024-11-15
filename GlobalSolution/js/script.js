function toggleMenu() {
    var barraOpcoes = document.getElementById("barraOpcoes");
    if (barraOpcoes.style.display === "none" || barraOpcoes.style.display === "") {
        barraOpcoes.style.display = "block"; // Mostra a barra de opções
    } else {
        barraOpcoes.style.display = "none"; // Esconde a barra de opções
    }
}