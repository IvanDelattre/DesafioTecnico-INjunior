let array = [];
let order = [];
let size = Number ( prompt("Digite Tamanho do array: ") );
let sequency = 0;
let lastOne = Number.NEGATIVE_INFINITY;

for(let i = 0 ; i < size ; i++){
    let add = Number( prompt("Digite numero: ") );
    if ( add > lastOne ){
        sequency += 1;
        lastOne = add ;
    }
    else if ( add <= lastOne){
        order.push( sequency);
        console.log(`fim da sequencia crescente :  ${sequency}`);
        sequency = 1;
    }
    array.push(add);
}
order.push(sequency);


console.log(`O maior sequência de números crescentes é: ${ Math.max(...order) }` ) ; 




 