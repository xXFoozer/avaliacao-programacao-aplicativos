export default class Livro {
    constructor(titulo: string, autor: string, isbn: string){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;


    }


    protected titulo: string;
    protected autor: string;
    protected isbn: string;

    
    public getNumero(): string {
        return this.isbn;
    }
    
    public setNumero(numero: string): void {
        this.isbn = numero;
    }

    public exibirDetalhes(){
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`ISBN: ${this.isbn}`)
    }
}