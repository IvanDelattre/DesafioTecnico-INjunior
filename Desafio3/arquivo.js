
let situation = 1;
let people = [];
let birth = [];

while( situation){
    let person = prompt("Digite nome da Pessoa:");
    let year  = prompt("Digite ano de nascimento: ");
    people.push(person);
    birth.push(year);
    situation = Number ( prompt("Deseja cadastrar outra pessoa [1/0] ? ") ) 
}

birth = VerificarIdades(people , birth  ) ; 

function VerificarIdades( people ,  birth ){
    for( i = 0 ; i <  people.length ; i++ ){
        if( 2024 - birth[i] >= 18 ){
            birth[i] = "Maior";
        }else{
            birth[i] = "Menor";
        }
        console.log(`${people[i]} : ${birth[i]} de idade `) ; 
    }
    return birth;

}





