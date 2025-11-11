const card = document.getElementById("cardInformativo");
const infos = document.getElementById("infos").children;
const nome = document.getElementById("nomePlaneta");

function abrirCard(titulo, descricao, diametro, massa, temperatura) {
    nome.innerHTML = titulo;
    infos[0].innerHTML = descricao;
    infos[1].innerHTML = diametro;
    infos[2].innerHTML = massa;
    infos[3].innerHTML = temperatura;

    card.style.display = "block";
    card.style.opacity = "0";
    card.style.maxHeight = "0px";

    const alturaConteudo = card.scrollHeight + "px";//Isso aqui é o que vai retornar a altura total que o conteudo precisa
    

    setTimeout(() => {
        card.style.maxHeight = alturaConteudo;
        card.style.opacity = "1";
    }, 10);
}

function fecharCard() {
    card.style.maxHeight = "0";
    card.style.opacity = "0";
    setTimeout(() => {
        card.style.display = "none";
    }, 400);
}

// Planeta por planeta
function sun() {
    abrirCard(
        "SOL",
        "O Sol é uma estrela anã amarela que fornece luz e calor para a Terra, essencial para a vida.",
        "-Diâmetro: ~1.392.000 km (109× o da Terra)",
        "-Massa: ~1,99 × 10³⁰ kg (333.000× a da Terra)",
        "-Temperatura: ~5.500 °C na superfície"
    );
}

function mercury() {
    abrirCard(
        "MERCÚRIO",
        "Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol, com superfície rochosa e temperaturas extremas.",
        "-Diâmetro: ~4.880 km (0,38× o da Terra)",
        "-Massa: ~3,30 × 10²³ kg (0,055× a da Terra)",
        "-Temperatura: ~430 °C durante o dia / ~-180 °C à noite"
    );
}
function venus() {
    abrirCard(
        "VÊNUS",
        "Vênus é o segundo planeta mais próximo do Sol, com atmosfera densa e temperaturas extremamente altas.",
        "-Diâmetro: ~12.104 km (0,95× o da Terra)",
        "-Massa: ~4,87 × 10²⁴ kg (0,82× a da Terra)",
        "-Temperatura: ~465 °C"
    );
}
function earth(){
    abrirCard(
        "TERRA",
        "A Terra é o terceiro planeta do Sistema Solar, lar da vida, com água líquida e atmosfera respirável.",
        "-Diâmetro: ~12.742 kg",
        "-Massa: ~5,97 × 10²⁴ kg",
        "-Temperatura: ~15 °C média"
    );   
}
function mars(){
    abrirCard(
        "MARTE",
        "Marte é o quarto planeta, conhecido como planeta vermelho, com superfície rochosa e calotas polares.",
        "-Diâmetro: ~6.779 km (0,53× a Terra)",
        "-Massa: ~6,42 X 10²³ kg (0,11× a Terra)",
        "-Temperatura: ~ -63 °C"
    );   
}
function jupter(){
    abrirCard(
        "Júpiter",
        "Júpiter é o maior planeta do Sistema Solar, um gigante gasoso com enormes tempestades, incluindo a Grande Mancha Vermelha.",
        "-Diâmetro: ~139.820 km (11× a Terra)",
        "-Massa: ~1,90 × 10²⁷ kg (318× a Terra)",
        "-Temperatura:~ -145 °C média"
    );   
}
function saturn(){
        abrirCard(
        "Saturno",
        "Saturno é famoso por seus anéis espetaculares, sendo um gigante gasoso com baixa densidade.",
        "-Diâmetro: ~116.460 km (9,1× a Terra)",
        "-Massa: ~5,68 × 10²⁶ kg (95× a Terra)",
        "-Temperatura:~-178 °C média"
    );  
}
function uranus(){
        abrirCard(
        "Urano",
        "Urano é um gigante gasoso com coloração azul-esverdeada, inclinando-se quase de lado enquanto orbita o Sol.",
        "-Diâmetro: ~50.724 km (4× a Terra)",
        "-Massa: ~8,68 × 10²⁵ kg (14× a Terra)",
        "-Temperatura:~-197 °C"
    ); 
}
function neptune(){
        abrirCard(
        "Netuno",
        "Netuno é o planeta mais distante, um gigante gasoso com ventos extremamente fortes e tom azul intenso.",
        "-Diâmetro: ~49.244 km (3,9× a Terra)",
        "-Massa: ~1,02 × 10²⁶ kg (17× a Terra)",
        "-Temperatura:~-201 °C"
    ); 
}
function sobre(){
        abrirCard(
        "Sobre o projeto",
        "Este projeto foi desenvolvido enquanto eu estudava mais sobre desenvolvimento web. Usei HTML, CSS e JavaScript para criar uma experiência interativa do Sistema Solar, com planetas animados, cards informativos e transições suaves. Aprendi a manipular elementos dinamicamente, controlar animações, usar técnicas como setTimeout para transições e abrir conteúdo de forma responsiva, aplicando efeitos visuais como hover, blur e centralização de elementos. Foi uma forma prática e divertida de consolidar meus conhecimentos em front-end e criar uma aplicação interativa do zero.",
        "A princípio, a ideia era apenas estudar animações usando um modelo do Sistema Solar, mas logo surgiu a inspiração de tornar o projeto interativo, apresentando informações sobre cada planeta com um clique. Depois, veio o desafio de permitir que as órbitas pudessem reverter e voltar ao normal, tornando o movimento mais controlável. Por fim, devido à dificuldade de clicar nos planetas em movimento, surgiu a necessidade de um botão de pause, que facilita a interação e torna a experiência mais prática e interessante.",
        "",
        ""
    ); }