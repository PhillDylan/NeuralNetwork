// Função de configuração executada uma vez quando o programa é iniciado
function setup(){
    // Criando um canvas de 500x500 pixels
    createCanvas(500,500);
    // Definindo a cor de fundo do canvas como preto
    background(0);

    // Criando uma nova instância da classe Matrix com 3 linhas e 3 colunas
    var m = new Matrix(3,3);
    
    // Exibindo a matriz no console
    console.log(m)
}

// Função de desenho executada continuamente em um loop
function draw(){

}
