function toggleMenu() {
    var barraOpcoes = document.getElementById("barraOpcoes");
    barraOpcoes.classList.toggle("active");
}

function validarFormContato(event) {
    event.preventDefault();

    const nome = document.getElementById('txtNome').value.trim();
    const sobrenome = document.getElementById('txtSobrenome').value.trim();
    const email = document.getElementById('txtEmail').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome) {
        alert('Por favor, preencha o nome.');
        return false;
    }

    if (!sobrenome) {
        alert('Por favor, preencha o sobrenome.');
        return false;
    }

    if (!email) {
        alert('Por favor, preencha o e-mail.');
        return false;
    }

    if (!mensagem) {
        alert('Por favor, escreva uma mensagem.');
        return false;
    }

    setTimeout(() => {
        window.location.href = 'mensagem-enviada.html';
    }, 100);

    return false;
}

function validarFormOrcamento(event) {
    event.preventDefault();

    const nome = document.getElementById('txtNome').value.trim();
    const email = document.getElementById('txtEmail').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome) {
        alert('Por favor, preencha o nome.');
        return false;
    }

    if (!email) {
        alert('Por favor, preencha o e-mail.');
        return false;
    }

    if (!mensagem) {
        alert('Por favor, informe os carros e quantidades desejados.');
        return false;
    }

    setTimeout(() => {
        window.location.href = 'orcamento-enviado.html';
    }, 100);

    return false;
}
