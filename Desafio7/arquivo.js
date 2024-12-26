let string = prompt("Digite o Possível palindromo");

string = string.split(" ");
let frase = '';
for(let i = 0 ; i < string.length ; i++){
    frase += string[i].toLocaleLowerCase() ; 
}

let verificador = palindromo(frase);
if( Number(verificador) ){
    console.log("eh palindromo") ; 
}else{
    console.log("NÃO eh palindromo") ; 
}


function palindromo(string){
    let right = 0;
    let left = string.length - 1;
    for( let i = 0 ; i < (string.length)/2 ; i++ ){
        if(string[right] != string[left] ) return 0;
        right += 1;
        left -= 1;
    }
    return 1;


}