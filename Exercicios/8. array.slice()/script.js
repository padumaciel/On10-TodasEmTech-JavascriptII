// const listagemDeFrutas = [ "Uva", "Banana", "Manga", "Cajá", "Pinha", "Maçã", "Melão"];

// const selectedItens = listagemDeFrutas.slice(0,4);
// console.log(selectedItens);

/* O slice não remove objetos do array original, apenas seleciona dentro de um intervalo.
Se o intervalo for (0,4), ele vai pegar os elementos 0,1,2 e 3. Não pega o quarto elemento*/


const usuarios = [
    {user:234, name: 'Marcia', idade:40 },
    {user:235, name: 'Lorena', idade:20 },
    {user:236, name: 'Patricia', idade:24 },
    {user:237, name: 'Mariana', idade:15 },
    {user:238, name: 'Isis', idade:34 },
    {user:239, name: 'Pietra', idade:23 }
]

const pegaUsuarios = usuarios.slice(2,5);
console.log(pegaUsuarios);