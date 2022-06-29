function computerplay(){

    let options = ['rock', 'paper', 'scissors'];
    let a = Math.floor(Math.random() * (3));

    console.log(options[a])
    return options[a];

}

function game(playerSelection, computerselection){

    playerSelection = playerSelection.toLowerCase();

    if(playerSelection != (computerselection)){

        if(playerSelection==('rock')){
            if(computerselection==('paper')){
                return(0);
            }
            else{
                return(1);
            }
        }

        if(playerSelection==('scissors')){
            if(computerselection==('rock')){
                return(0);
            }
            else{
                return(1);
            }
        }

        if(playerSelection==('paper')){
            if(computerselection==('scissors')){
                return(0);
            }
            else{
                return(1);
            }
        }

    }
    else{

        return(1);

    }

}


function playgame(){

    let comp_win = 0;
    let player_win = 0;

    for(let i = 0; i < 5; i++){

        let select = prompt('What would you like to play?');
        let computer = computerplay();

        let result = game(select, computer)

        if(result == 1){
            player_win += 1;
        }
        else if(result == 0){
            comp_win += 1;
        }
        else{
            game(select, computer);
        }

    }

    if(player_win > comp_win){
        return('You are the winner!');
    }
    else if(comp_win > player_win){
        return('You lost');
    }
    else{
        return("It's a tie");
    }

}