const areaBoasVindas = document.querySelector("#boas-vindas");

if (areaBoasVindas) {

    let nome = prompt("Digite seu nome:");
    let sobrenome = prompt("Digite seu sobrenome:");

    if (!nome || nome.trim() === "") {
        nome = "Usuário";
    }

    if (!sobrenome || sobrenome.trim() === "") {
        sobrenome = "";
    }

    const usuario = `${nome} ${sobrenome}`.trim();

    const agora = new Date();

    const dias = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado"
    ];

    const diaSemana = dias[agora.getDay()];
    const dia = String(agora.getDate()).padStart(2, "0");
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const ano = agora.getFullYear();
    const hora = String(agora.getHours()).padStart(2, "0");
    const minuto = String(agora.getMinutes()).padStart(2, "0");

    const fusoMinutos = -agora.getTimezoneOffset();

    const sinal = fusoMinutos >= 0 ? "+" : "-";

    const fusoHoras = String(
        Math.floor(Math.abs(fusoMinutos) / 60)
    ).padStart(2, "0");

    const fuso = `${sinal}${fusoHoras}:00`;

    const mensagem =
        `Olá, ${usuario}! Hoje é ${diaSemana}, ${dia}/${mes}/${ano} - ${hora}:${minuto} (${fuso})`;

    areaBoasVindas.innerHTML = `<p>${mensagem}</p>`;

    console.log(mensagem);
}

// CAMPO DE BUSCA

const campoBusca = document.querySelector("#campoBusca");

const linhasTabela = document.querySelectorAll(
    ".relatorio-card tbody tr"
);

if (campoBusca) {

    campoBusca.addEventListener("input", function () {

        const textoBusca = campoBusca.value.toLowerCase();

        linhasTabela.forEach(function (linha) {

            const nome = linha.children[0].textContent.toLowerCase();

            if (nome.includes(textoBusca)) {
                linha.classList.remove("linha-escondida");
            } else {
                linha.classList.add("linha-escondida");
            }

        });

    });

}


// DARK MODE / LIGHT MODE

const botaoTema = document.querySelector("#botaoTema");

if (botaoTema) {

    botaoTema.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {

            botaoTema.innerHTML = `
                <i class="fa-light fa-sun"></i>
                Light Mode
            `;

        } else {

            botaoTema.innerHTML = `
                <i class="fa-light fa-moon"></i>
                Dark Mode
            `;

        }

    });

}


// MENU LATERAL MOBILE

const menuToggle = document.querySelector("#menu-toggle");
const menuLateral = document.querySelector("#menu-lateral");

if (menuToggle && menuLateral) {

    menuToggle.addEventListener("change", function () {

        if (menuToggle.checked) {

            menuLateral.classList.add("menu-aberto");

        } else {

            menuLateral.classList.remove("menu-aberto");

        }

    });

}

// FECHAR MENU AO CLICAR EM UM LINK

const linksMenu = document.querySelectorAll("#menu-lateral a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        if (menuToggle) {
            menuToggle.checked = false;
        }

        if (menuLateral) {
            menuLateral.classList.remove("menu-aberto");
        }

    });

});
