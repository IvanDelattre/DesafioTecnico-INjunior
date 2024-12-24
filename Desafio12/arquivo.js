function verificador(list , integer ){
    let contador = 0;
    for( let i = 0 ; i < list.length ; i++){
        if( list[i] == integer ) contador += 1;
        
        if(contador == 2 ) return contador ; 

    }
    return contador;
}


function encontrarElementoUnico(list){
    for( let i = 0 ; i <  list.length ; i++){
        if( verificador(list , list[i] ) == 1 ) return list[i] ; 
    }
}

let array = [];
let integer;
let run = Number ( prompt("Digite Quantidade de duplas inseridas: ")  ); 

for( let i = 0 ; i < run ; i++ ){
    integer = Number( prompt("Digite Número a ser adicionado na lista:") );
    array.push(integer);
    array.push(integer);
}

console.log(array);

let exclude = Number( prompt(`Digite indice entre 0 e ${array.length - 1} para ser excluido da lista`) );
array.splice(exclude , 1);

console.log(array);

let alone = encontrarElementoUnico( array ) ; 
console.log(`Número sozinho no array: ${alone}`) ; 




 