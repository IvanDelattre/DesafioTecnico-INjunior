
function aux_fibonnaci(number  , contador ,  atual , anterior, sequency){
     
    if( contador >= number  ) return sequency;
    let temp = atual ;
    atual += anterior;
    anterior = temp;
    sequency.push(atual) ;
    return aux_fibonnaci(number , contador+1 , atual , anterior , sequency); 
}

function fibonacciRecursivo(number){
    if(number == 1 ){
        return [1] ; 
    }

    return aux_fibonnaci(number , 2  , 1 , 1 , [1 , 1]) ; 

}

let number = Number( prompt("Digite sequencia do fibonnaci "));

console.log( fibonacciRecursivo(number) ) ; 


