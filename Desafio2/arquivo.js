function fatorial(a){
    
    if( a < 0 || a - parseInt(a) > 0) throw new Error("Números válidos devem ser Inteiros e Positivos");

    let result = 1
    for( let i = 2 ; i <= a ; i++ ){
        result *= i ;
    }
    return result ;
}

let continueLoop = true;
while( continueLoop){
    let option = prompt("Deseja calcular o fatorial de algum número: [s/n] ou [S/N]") ; 
    
    option = option.toLowerCase() ; 


    switch(option){
        case "s" :
            let number =Number (  prompt("Digite número que se deseja calcular o fatorial: ")  ) ;
            try{
                console.log(`Fatorial de ${number} é ${ fatorial(number)} `);     
            }catch(e){
                console.log(e.message) ; 
            }
            break;
        case "n":
            continueLoop = false; 
            break;
        default:
            console.log("Opção inválida");      
    }

}
