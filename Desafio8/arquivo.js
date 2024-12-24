
const booksByCategory = [
    {
        category: "Romance",
        books: [
            {
                title: "O Sol Também é Uma Estrela",
                author: "Nicola Yoon"
            },
            {
                title: "O Noivo da Minha Melhor Amiga",
                author: "Emily Giffin"
            },
            {
                title: "Orgulho e Preconceito",
                author: "Jane Austen"
            }
        ]
    },
    {
        category: "Fantasia",
        books: [
            {
                title: "Harry Potter e a Pedra Filosofal",
                author: "J.K. Rowling"
            },
            {
                title: "O Hobbit",
                author: "J.R.R. Tolkien"
            },
            {
                title: "Eragon",
                author: "Christopher Paolini"
            },
            {
                title: "O Nome do Vento",
                author: "Patrick Rothfuss"
            }
        ]
    },
    {
        category: "Suspense",
        books: [
            {
                title: "A Garota no Trem",
                author: "Paula Hawkins"
            },
            {
                title: "O Silêncio dos Inocentes",
                author: "Thomas Harris"
            }
        ]
    },
    {
        category: "Ficção Científica",
        books: [
            {
                title: "Duna",
                author: "Frank Herbert"
            },
            {
                title: "Neuromancer",
                author: "William Gibson"
            },
            {
                title: "Fundação",
                author: "Isaac Asimov"
            },
            {
                title: "1984",
                author: "George Orwell"
            },
            {
                title: "O Fim da Infância",
                author: "Arthur C. Clarke"
            }
        ]
    }
];


console.log( returnListObject(booksByCategory));


//função para retornar o objeto referente uma categoria; 
function returObject(category , booksByCategory){
    for( let i = 0 ; i <  booksByCategory.length  ; i++){
        if( booksByCategory[i].category == category ){
            let object = {
                nameCategory : category,
                numbersBooks : booksByCategory[i].books.length 
            }
            return object;
        }        
    }
    console.log("Categoria Não encontrada: retorno null") ; 
    return null

}

//função que faz o retorno de uma lista com todos as categroias;
function returnListObject(booksByCategory){
    let list = [];
    for( let i = 0 ; i < booksByCategory.length ;  i++ ) list.push( returObject( booksByCategory[i].category , booksByCategory  ) ) ; 

    return list ; 

}








