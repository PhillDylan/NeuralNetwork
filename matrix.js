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


    /**
     * Diferença de um static e de um nao static 
     * no nao static eu chamaria assim
     *    var m = new Matrix(3,3);
     *      m.add()
     * 
     * e no static eu chamo assim  
     *    var m = new Matrix(3,3);
     *     Matrix.add()
    */

    // Função para aplicar uma função a cada elemento da matriz
    map(func){
        this.data = this.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num,i,j);
            });
        });
        return this;
    }

    // Função estática para somar duas matrizes A e B
    static add(A,B){
        var matrix = new Matrix(A.rows,A.cols); // Cria uma nova matriz para armazenar o resultado da soma
        console.log(A.data); // Exibe os dados da matriz A
        console.log(B.data); // Exibe os dados da matriz B
        matrix.map((num, i ,j) => {
            return A.data[i][j] + B.data[i][j] // Calcula a soma dos elementos correspondentes das matrizes A e B
        });
        console.log(matrix.data); // Exibe os dados da matriz resultante
    }
}
