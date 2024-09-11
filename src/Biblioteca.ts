import leia from 'readline-sync'
import Livro from "./Livro";
import LivroFisico from './LivroFisico';
import Ebook from './Ebook';

export default class Biblioteca{
    private livros : Livro[] = []
    






    public addLivro(){
        console.log("----NOVO LIVRO-----")
        var tipoLivro = leia.keyInSelect(["Fisico", "Ebook"]) + 1;
        var nomeLivro = leia.question("QUAL O NOME DO LIVRO: ");
        var autor = leia.question("QUAL O AUTOR DO LIVRO: ");
        var isbn = leia.question("DIGITE O ISBN DO LIVRO: ");
       
        
        var livro = new Livro(nomeLivro, autor, isbn);
   
        if(tipoLivro === 1){
            var pags = leia.questionInt("Numero de paginas: ")
            livro = new LivroFisico(nomeLivro, autor, isbn,pags)
            console.log("SUCESSO !!!")     
        }else {
            var tamanhoArquivo = leia.questionInt("tamanho do arquivo: ")
            livro = new Ebook(nomeLivro, autor, isbn,tamanhoArquivo)
            console.log("SUCESSO !!!")     
        }
       
        
        
        
        this.livros.push(livro)

    }


    public removeLivro(){
        console.log("----REMOVER LIVRO-----")

        var numeroLivro = leia.question("DIGITE O ISBN DO LIVRO PARA DELETAR: ")
        for(var i = 0; i < this.livros.length; i++){
            if(numeroLivro === this.livros[i].getNumero()){
                this.livros.splice(i, 1);
                console.log(`LIVRO COM ISBN ${numeroLivro} EXCLUIDA COM SUCESSO`)
                return;
            }
        }
    
        console.log(`NÃO FOI ENCONTRADO NENHUM LIVRO COM A ISBN ${numeroLivro} !!!`);
    }

    public mostrarLivros() {
        console.table(this.livros);
    }





}