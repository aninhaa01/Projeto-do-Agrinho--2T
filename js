let recursos = 0;
let vendas = 0;

function produzir() {
    recursos += 10;
    document.getElementById("recursos").innerText = "Recursos: " + recursos;
    verificarDesafio();
}

function transportar() {
    if (recursos >= 10) {
        recursos -= 10;
        vendas += 10;
        document.getElementById("recursos").innerText = "Recursos: " + recursos;
        document.getElementById("mercado").innerText = "Vendas: " + vendas;
    } else {
        alert("Produza mais recursos antes de vender!");
    }
}

function verificarDesafio() {
    let desafios = ["Estrada danificada!", "Tempo chuvoso!", "Alta demanda!"];
    let desafioAtivo = desafios[Math.floor(Math.random() * desafios.length)];
    document.getElementById("mensagem").innerText = desafioAtivo;
}

let ranking = [];

function atualizarRanking() {
    let jogador = { nome: "Jogador", vendas: vendas };
    ranking.push(jogador);

    ranking.sort((a, b) => b.vendas - a.vendas);

    let rankingLista = document.getElementById("ranking");
    rankingLista.innerHTML = "";

    ranking.forEach((jogador, index) => {
        rankingLista.innerHTML += `<p>${index + 1}. ${jogador.nome} - ${jogador.vendas} vendas</p>`;
    });
}

letrecursos = 0;
letvendas = 0;
let nivelFazenda = 1;

function produzir() {
    let producaoBase = 10;
    let producaoTotal = producaoBase * nivelFazenda;

    recursos += producaoTotal;
    document.getElementById("recursos").innerText = "Recursos: " + recursos;
    verificarNivel();
}

function verificarNivel() {
    if (recursos >= 50 && nivelFazenda === 1) {
        nivelFazenda++;
        alert("Parabéns! Sua fazenda subiu para o nível 2.");
    } else if (recursos >= 100 && nivelFazenda === 2) {
        nivelFazenda++;
        alert("Sua fazenda está no nível 3! Produção aumentada.");
    }

    document.getElementById("nivel").innerText = "Nível da Fazenda: " + nivelFazenda;
}

