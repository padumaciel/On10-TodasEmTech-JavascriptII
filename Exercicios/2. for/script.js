// const listagemDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha", "Maçã", "Melão"];

// for (let frutas = 0; frutas < listagemDeFrutas.length; frutas++){
//     console.log(listagemDeFrutas[frutas] + 's');
// }

const usuarios = [
    {user: 234, name: 'Marcia', idade: 40 },
    {user: 235, name: 'Lorena', idade: 20 },
    {user: 236, name: 'Patricia', idade: 24 },
    {user: 237, name: 'Mariana', idade: 15 },
    {user: 238, name: 'Isis', idade: 34 },
    {user: 239, name: 'Pietra', idade: 23 }
]
//um jeito
 for (let contador = 0; contador < usuarios.length ; contador++) {
    if (usuarios[contador].user === 235) {
        console.log(usuarios[contador].name, usuarios[contador].idade);
    }
} 
// outro jeito
for (let contador of usuarios) {

    if(contador.user === 235) {
        console.log(contador.name, contador.idade);
    }

}

// for...in interage com as propriedades e for...of interage com os valores