
var Random_Number;
var win=0;
var lose=0;
var user_number=0;
var Random_Number_Crystal=[];
console.log("123");


function main_game() {
    Random_Number=Random_number_generator(1);
    console.log(Random_Number);
    document.getElementById("Random_Number").innerHTML=Random_Number;
    for(var i=0;i<4;i++){
        Random_Number_Crystal[i]=Random_number_generator(2);
       console.log(Random_Number_Crystal[i]);
    }
    click_event();
}
function click_event(){
    document.getElementById("first").addEventListener("click", function () {
        user_number=user_number+Random_Number_Crystal[0];
        console.log(user_number +"U")
        document.getElementById("Current_Number").innerHTML=user_number;
        judge(user_number,Random_Number);
    } )
    document.getElementById("second").addEventListener("click", function () {
        user_number=user_number+Random_Number_Crystal[1];
        document.getElementById("Current_Number").innerHTML=user_number;
        judge(user_number,Random_Number);
    })
    document.getElementById("third").addEventListener("click", function () {
        user_number=user_number+Random_Number_Crystal[2];
        document.getElementById("Current_Number").innerHTML=user_number;
        judge(user_number,Random_Number);
    })
    document.getElementById("forth").addEventListener("click", function () {
        user_number=user_number+Random_Number_Crystal[3];
        document.getElementById("Current_Number").innerHTML=user_number;
        judge(user_number,Random_Number);
        
    })
    
}
function judge(number_user,number_random){
    if(number_user===number_random){
        win++;
        document.getElementById("text_win_lose").innerHTML="You WON!";
        document.getElementById("Win").innerHTML=win;
        reset();
    }
    else if(number_user>number_random){
        lose++;
        console.log(lose);
        document.getElementById("text_win_lose").innerHTML="You Lost! Try agian :D"
        document.getElementById("Lose").innerHTML=lose;
        reset();
    }
}
function reset(){
    for(var i=0;i<4;i++){
    Random_Number_Crystal.shift();
    }
    user_number=0;
    win=0;
    lose=0;
    document.getElementById("Current_Number").innerHTML=0;
    main_game();
}
function Random_number_generator(type){
    if(type===1){
         return Math.floor((Math.random()*120)+19);
 
    }
    else{
        var Random=Math.floor((Math.random()*12)+1);
        return check_crystal_number(Random);
    }

}
function check_crystal_number(number){
    for(var i=0;i<Random_Number_Crystal.length;i++){
        if(Random_Number_Crystal[i]===number)
        {
            return Random_number_generator(2);
        }
    }
    return number;
    
}

window.onload = main_game();