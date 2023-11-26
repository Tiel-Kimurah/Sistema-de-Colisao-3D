

var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightblue';
pincel.fillRect(0, 0, 600, 400);

var x = 30;
var y = 20;

//codigo do teclado
var esquerda = 37;
var cima = 38;
var direta = 39;
var baixo = 40;

//taxa de incremento
var taxa = 5;
var colisao = desenhaQuadrado;

//criacao da funcao de desenhar o quadrado
function desenhaQuadrado() {
    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.fillRect(50, 50, 50, 50);
    pincel.fillStroke = 'black';
    pincel.strokeRect(50, 50, 50, 50);
};

//funcao que ira desenhar o objeto bolinha
function desenhaBolinha(x, y, raio){
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
};

//funcao de limpar a tela
function limpaTela(){
    pincel.clearRect(0, 0, 600, 400);
};

//funcao de atualizacao da tela
function atualizaTela(){
    limpaTela();
    desenhaBolinha(x, y, 10);
    desenhaQuadrado();
};

setInterval(atualizaTela, 20);

// funcao que determina o evento de setas aplicadas na tela
function setasDoTeclado(evento){
    if(evento.keyCode == cima){
        y = y - taxa;
    }else if(evento.keyCode == baixo){
        y = y + taxa;
    }else if(evento.keyCode == esquerda){
        x = x - taxa;
    }else if(evento.keyCode == direta){
        x = x + taxa;
    };
};

if(desenhaBolinha == colisao){
    alert('vc pedeu')
};

document.onkeydown = setasDoTeclado;