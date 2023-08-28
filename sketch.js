// Função de configuração executada uma vez quando o programa é iniciado
function setup(){
    // Criando um canvas de 500x500 pixels
    createCanvas(500,500);
    // Definindo a cor de fundo do canvas como preto
    background(0);

    // Criando uma nova instância da classe Matrix com 3 linhas e 3 colunas
    // var m1 = new Matrix(1,2);
    // var m2 = new Matrix(2,1);

    var nn = new RedeNeural(1,3,1);
    var arr = [1,2];

    nn.feedForward(arr);


}

// Função de desenho executada continuamente em um loop
function draw(){

}
