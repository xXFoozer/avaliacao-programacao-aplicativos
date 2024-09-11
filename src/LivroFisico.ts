import Livro from "./Livro";

export default class LivroFisico extends Livro{
    constructor(titulo: string, autor: string, isbn: string,numeroPaginas: number){
        super(titulo,autor,isbn);
        this.numeroPaginas = numeroPaginas
    }
    private numeroPaginas: number


    public override exibirDetalhes(): void {
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`ISBN: ${this.isbn}`)
        console.log(`N° DE PÁGINAS ${this.numeroPaginas}`)

    }



}