let books = [
    {
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Second Edition",
        subtitle: "A Modern Introduction to Programming",
        author: "Marijn Haverbeke",
        published: "2014-12-14T00:00:00.000Z",
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        subtitle: "A JavaScript and jQuery Developer's Guide",
        author: "Addy Osmani",
        published: "2012-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781449365035",
        title: "Speaking JavaScript",
        subtitle: "An In-Depth Guide for Programmers",
        author: "Axel Rauschmayer",
        published: "2014-02-01T00:00:00.000Z",
    },
    {
        isbn: "9781491950296",
        title: "Programming JavaScript Applications",
        subtitle: "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
        author: "Eric Elliott",
        published: "2014-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        subtitle: "The Definitive Guide for JavaScript Developers",
        author: "Nicholas C. Zakas",
        published: "2016-09-03T00:00:00.000Z",
    },
    {
        isbn: "9781491904244",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        published: "2015-12-27T00:00:00.000Z",
    },
    {
        isbn: "9781449325862",
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        published: "2013-08-02T00:00:00.000Z",
    },
    {
        isbn: "9781449337711",
        title: "Designing Evolvable Web APIs with ASP.NET",
        author: "Glenn Block, et al.",
        published: "2014-04-07T00:00:00.000Z",
    }
]

function exibirArrayBooks(){
    for (let book of books) {
        let data = new Date(book.published);
        let dia = data.setDate(data.getDate()+1);
        let dataFormatada = data.toLocaleDateString("pt-br");
        document.getElementById("corpoTabela").innerHTML += `
                <tr id="tr-tabela">
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.isbn}</td>
                    <td>${dataFormatada}</td>
                    <td><button id='botao-tabela' class='botao-tabela'></button></td> 
                </tr>
            `
    }
}
exibirArrayBooks();

function exibirDadosTabela(event){
    event.preventDefault();
    
    books.push({
        isbn: document.getElementById('isbnDoLivro').value,
        title: document.getElementById('tituloDoLivro').value,
        author: document.getElementById('autorDoLivro').value,
        published: document.getElementById('dataDePublicacaoDoLivro').value,
    })

    for(let book = books.length-1; book <= books.length-1; book++){
        if(books[book].isbn === "" || books[book].title === "" || books[book].author ==="" || books[book].published ==="") {
            alert("Os dados não foram inseridos corretamente. Tente novamente!")
            books.pop();
        }else{
            let dataPublicacao = new Date(books[book].published);
            let dia = dataPublicacao.setDate(dataPublicacao.getDate()+1);
            let dataPublicacaoFormatada = dataPublicacao.toLocaleDateString("pt-br");
            document.getElementById("corpoTabela").innerHTML += `
            <tr id="tr-tabela">
                <td>${books[book].title}</td>
                <td>${books[book].author}</td>
                <td>${books[book].isbn}</td>
                <td>${dataPublicacaoFormatada}</td>
                <td><button id='botaoTabela' class='botao-tabela'></button></td> 
            </tr>
        `
        limparFormulario();
        }
    }
}

const limparFormulario = ()=>{
    tituloDoLivro.value = ""
    autorDoLivro.value = ""
    isbnDoLivro.value = ""
    dataDePublicacaoDoLivro.value = ""
}

const corpoTabela = document.querySelector('#corpoTabela');

corpoTabela.addEventListener('click', (event)=>{
    if (event.target.className=="botao-tabela"){
        const botaoExcluirNovamente=event.target.parentElement
        botaoExcluirNovamente.parentElement.remove()
    }
})