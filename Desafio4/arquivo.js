
let money = Number ( prompt("Digite valor da Carteira: ") )  ;


convertion( money ) ; 


function convertion(money ){
    let dolar = money/5.7;
    let euro = money/6.1;

    console.log(`Valor em dólar US$ ${ dolar.toFixed(2) } \nValor em euro €$ ${ euro.toFixed(2) } `);

}