let number = Number(  prompt(  "Digitar Número para verificar: " ) );


fizzbuzz(number) ; 

function fizzbuzz( number ){
    if( number % 15 == 0){
        console.log("fizzzbuzzz");
        return;
    }
    if( number % 3 == 0 ){
        console.log("fizzz");
    }
    if( number % 5){
        console.log("buzzz");
    }
}