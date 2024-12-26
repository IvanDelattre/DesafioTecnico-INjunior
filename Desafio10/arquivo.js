let clients =  [] ; 

let continueLoop = true;

function printList(list){
    for(let i = 0 ; i < list.length ; i++){
        console.log(list[i]) ; 
    }
}

while(continueLoop){
    
    let option = Number ( prompt("Digite o que deseja fazer:\n1 - Cadastrar cliente.\n2 - Atender Cliente.\n3- Mostrar Fila \n4 - sair.") ) ; 
    switch(option){
        case 1:
            let name = prompt("Digite nome do cliente:");
            clients.push(name);
            console.log(`Cliente ${name} colocado no final da fila\n`);
            break;
        case 2:
            if( clients.length == 0 ){
                console.log("Fila Vazia");
                break;
            }
            let served = clients.shift();
            console.log(`Cliente ${served} atendido\n`);
            break;
        case 3:
            if( clients.length == 0 ){
                console.log("Fila Vazia");
                break;
            }
            printList(clients);
            break;
        case 4:
            continueLoop = false;
            break;
        default:
            console.log("Opção inválida\n");     
    }

}
