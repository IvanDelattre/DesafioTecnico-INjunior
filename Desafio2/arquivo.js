
//fazer questão 2 .

function Fatorial(a){
    
    if( a < 0 || a - parseInt(a) > 0) throw new Error("Números válidos devem ser Inteiros e Positivos");

    let result = 1
    for( let i = 2 ; i <= a ; i++ ){
        result *= i ;
    }
    return result ;
}



