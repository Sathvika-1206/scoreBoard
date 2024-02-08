let home_val=document.getElementById("home_sc");
let guest_val=document.getElementById("guest_sc");
let disp=document.getElementById("fin");
let home_score=0;
let guest_score=0;
//home_val.innerText="03";
//guest_val.innerText="43";
function one(){
home_score+=1;
home_val.innerText=home_score;
}
function two(){
    home_score+=2;
    home_val.innerText=home_score;
}
function three(){
    home_score+=3;
    home_val.innerText=home_score;
}
function one1(){
    guest_score+=1;
    guest_val.innerText=guest_score;
}
function two2(){
        guest_score+=2;
        guest_val.innerText=guest_score;
}
function three3(){
    guest_score+=3;
    guest_val.innerText=guest_score;
}

function result(){
    if(home_score > guest_score){
  disp.innerText="HOME WON";
    }
    else if(home_score < guest_score){
        disp.innerText="GUEST WON";
    }
    else{
        disp.innerText="TIE"
    }
}

function refresh(){
home_score=0;
guest_score=0;
home_val.innerText=home_score;
guest_val.innerText=guest_score;
disp.innerText=" ";
}