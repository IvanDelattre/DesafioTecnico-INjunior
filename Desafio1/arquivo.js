let a = Number( prompt("Dgite o 'a' da equação quadrática na forma : a(x^2) + bx + c = 0") );
let b = Number ( prompt("Dgite o 'b' da equação quadrática na forma : a(x^2) + bx + c = 0") ) ;
let c = Number( prompt("Dgite o 'c' da equação quadrática na forma : a(x^2) + bx + c = 0") ) ;

roots(a , b , c) ;

function roots( a , b , c){
    let value = discriminant(a , b , c);

    if( value < 0) {
        
        console.log("Não há raízes reais.");
        return  ;
    }
    if( value == 0 ){
        console.log ( `Única Raiz real: ${(-b)/ (2 * a)}`) ;
    }

    if( value > 0 ){
        value = Math.sqrt(value);
        console.log(`Primeira raiz real ${ (-b + value)/ (2 *a)  }.\nSegunda raiz real ${  (-b - value)/ (2 *a)  }`  )
    }

}


function discriminant( a , b , c){
    return (b**2) - (4 * a * c) ;
}

