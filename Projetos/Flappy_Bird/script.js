var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Carregando imagens
var bird = new Image();
bird.src = "images/bird.png";

var bg = new Image();
bg.src = "images/bg.png";

var chao = new Image();
chao.src = "images/chao.png";

var canocima = new Image();
canocima.src = "images/canocima.png";

var canobaixo = new Image();
canobaixo.src = "images/canobaixo.png";

// Variáveis
var espacoCanos = 100;
var constant;
var bX = 33;
var bY = 200;
var gravity = 1.4;
var pontos = 0;
var cano = [];

cano[0] = {
    x: canvas.width,
    y: 0
};

// Carregando os sons
var fly = new Audio();
fly.src = "sounds/fly.mp3";

var scoreSound = new Audio();
scoreSound.src = "sounds/score.mp3";

// Captura de tecla
document.addEventListener("keydown", voa);

// Voando
function voa() {
    bY = bY - 26;
    fly.play();
}

function jogo() {

    // Fundo do jogo
    ctx.drawImage(bg, 0, 0);

    for (let i = 0; i < cano.length; i++) {

        // Espaço entre os canos
        constant = canocima.height + espacoCanos;

        // Cano de cima
        ctx.drawImage(canocima, cano[i].x, cano[i].y);

        // Cano de baixo
        ctx.drawImage(
            canobaixo,
            cano[i].x,
            cano[i].y + constant
        );

        // Movimento dos canos
        cano[i].x = cano[i].x - 1;

        // Criando novos canos
        if (cano[i].x == 125) {
            cano.push({
                x: canvas.width,
                y: Math.floor(Math.random() * canocima.height) - canocima.height
            });
        }

        // Colisão
        if (
            bX + bird.width >= cano[i].x &&
            bX <= cano[i].x + canocima.width &&
            (
                bY <= cano[i].y + canocima.height ||
                bY + bird.height >= cano[i].y + constant
            )
        ) {
            location.reload();
        }

        // Colisão com o chão
        if (bY + bird.height >= canvas.height - chao.height) {
            location.reload();
        }

        // Marcando pontos
        if (cano[i].x == 5) {
            pontos++;
            scoreSound.play();
        }
    }

    // Chão
    ctx.drawImage(
        chao,
        0,
        canvas.height - chao.height
    );

    // Passarinho
    ctx.drawImage(bird, bX, bY);

    // Gravidade
    bY += gravity;

    // Placar
    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText(
        "Placar: " + pontos,
        10,
        canvas.height - 20
    );

    requestAnimationFrame(jogo);
}

jogo();
