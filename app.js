let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-but");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgamebutt = document.querySelector("#new-game");
 

let turnO = true; // playerX , playerY
let click = 0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
     turnO = true;
     enableboxes();
     msgcontainer.classList.add("hide");
}; 
boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if(turnO){ // if turnO was true i.e chance of O
            box.innerText = "O"; // print O
            click++;
            turnO = false; // then make chance of O false i.e turnO false
        } else{
            box.innerText = "X"; // turn of X so print X
            click++;
            turnO = true; // chance of O now
        }
        box.disabled = true; 
        checkwinner();
        if(click === 9){
            showdraw();
         }
    });
});

const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) =>{
      msg.innerText = `congratulations , winner is ${winner}`;
      msgcontainer.classList.remove("hide");
      disableboxes();

};
const showdraw = () =>{
    msg.innerText = 'Game Draw , No Winner!'
    msgcontainer.classList.remove("hide");

}

const checkwinner = () =>{ // for each box after we add X or O checkwinner func is called
    for(let pattern of winPattern){ // pattern variable will have each pattern of boxes array i.e all 8 patterns 1 by 1
        let pos1val = boxes[pattern[0]].innerText; // suppose pattern is 0 3 6 second pattern so pos1 means boxes array
        // mein pattern[0] mtlb 0th index pe kya hai
        let pos2val = boxes[pattern[1]].innerText;  // suppose pattern is 0 3 6 first pattern so pos2 means boxes array
        // mein pattern[2] mtlb 3rd index/box pe kya hai
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newgamebutt.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);