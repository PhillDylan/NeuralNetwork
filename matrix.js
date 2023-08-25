// Definindo uma classe chamada Matrix para representar matrizes
class Matrix{
    // Construtor da classe que recebe o número de linhas e colunas como parâmetros
    constructor(rows, cols){
        // Atribuindo o número de linhas e colunas aos atributos da classe
        this.rows = rows;
        this.cols = cols;

        // Inicializando um array vazio para armazenar os dados da matriz
        this.data = [];
        
        // Loop para criar as linhas da matriz
        for (let i = 0; i < rows; i++) {
            // Inicializando um array vazio para representar uma linha da matriz
            let arr = [];

            // Loop para preencher a linha da matriz com valores aleatórios entre 0 e 9
            for (let j = 0; j < cols; j++) {
                // Adicionando um valor aleatório entre 0 e 9 ao array da linha
                arr.push(Math.floor(Math.random()*10))
            }
            
            // Adicionando a linha preenchida ao array de dados da matriz
            this.data.push(arr);
        }
    }
}
