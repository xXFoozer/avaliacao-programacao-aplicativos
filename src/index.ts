import leia from 'readline-sync'
import Biblioteca from "./Biblioteca";

var senai = new Biblioteca();

var opcao = 0;
do {
    console.log("------------MENU------------")
    opcao = leia.keyInSelect(["ADICIONAR LIVRO", "REMOVER LIVRO","MOSTRAR LIVRO "]) + 1;
    switch (opcao) {
        case 1:
            senai.addLivro();
            break;
        case 2:
            senai.removeLivro();
            break;
        case 3: 
        senai.mostrarLivros();
            break;
        
    }
} while (opcao !== 0);