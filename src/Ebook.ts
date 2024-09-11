import Livro from "./Livro";

export default class Ebook extends Livro{
    constructor(titulo: string, autor: string, isbn: string,tamanhoArquivo: number){
        super(titulo,autor,isbn);
        this.tamanhoArquivo = tamanhoArquivo
    }
    private tamanhoArquivo: number





    public override exibirDetalhes(): void {
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`ISBN: ${this.isbn}`)
        console.log(`TAMANHO ARQUIVO: ${this.tamanhoArquivo}`)

    }
}