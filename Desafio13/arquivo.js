class Team{
    constructor(){
        this.team = [];
        this.somaScore = 0; 
    }

    adicionarJogador( player) {
        this.team.push(player);
        this.somaScore += player.score;
    }
    buscaPorPoricao(posicao){
        let playersByPostion = [] ; 
        for( let i = 0 ; i < this.team.length ; i++ ){
            if( posicao == this.team[i].position ){
                
                playersByPostion.push(this.team[i]) ; 
            }
        }
        if(playersByPostion.length > 0 ){
            return playersByPostion;
        }
        throw new Error("Esse Time não possui jogadores dessa posição")
    }

    calcularScoreMedio(){
        return (this.somaScore / this.team.length ) ; 
    }
    

    listarTime(){
        for(let i = 0 ; i < this.team.length ; i++){
            console.log(this.team[i]) ; 
        }
    }
    

}
class Player{
    constructor(name ,  age , position , score){
        this.name = name;
        this.age = age;
        this.position = position;
        this.score = score;
    }

    toString(){
     return `Nome: ${this.name}, Idade: ${this.age}, Posição: ${this.position}, Pontuação: ${this.score}`; 
    }
    
}

let team = new Team() ;

let continueLoop = true;
while(continueLoop){
    let option = parseInt( prompt("====================\nDigite opção.\n 1 - Adicionar Jogador.\n2 - Buscar por posição.\n3 - Listar time.\n4 - Calcular pontuação média.\n5 - sair.") );
    switch(option){
        case 1:
            let name = prompt("Digite Nome do jogador ") ;   
            let age = prompt("Digite idade do jogador");
            let position = prompt("Digite posição do jogador: ") ; 
            let score = Number(  prompt("Digite score do jogador") ) ; 
            let player  = new Player(name , age , position , score ) ; 
            team.adicionarJogador(player) ; 
            console.log(`Debug de somaScore ${team.somaScore}`);
            break;
        case 2:
            let pos = prompt("Digite Posicao buscada:");
            try{
                let lista = team.buscaPorPoricao(pos ) ;
                console.log(`lista retornada pela função: ${lista}`)
            }catch(e){
                console.log(e.message) ; 
            }    
            break;
        case 3:
            team.listarTime() ;
            break;
        case 4:
            console.log(`Média do socre: ${team.calcularScoreMedio()}`) ; 
            break;
        case 5 :
            continueLoop = parseInt( 0 ) ; 
            break; 
        default:
            console.log("Opção inválida") ; 
    }
        

}

