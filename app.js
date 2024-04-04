let boxs=document.querySelectorAll(".box");
let newGameButton=document.querySelector("#newgame-btn");
let resetButton=document.querySelector("#reset-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

let count=0;
let turnX=true;
const winner=[[0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]];

boxs.forEach((box) => {
        box.addEventListener("click", ()=>{
        if(turnX){
            turnX=false;
            box.innerHTML="X";
        }else{
            turnX=true;
            box.innerHTML="O";
        }
        count++;
        box.disabled=true;
        let isWinner=checkWinner();
        if(count=== 9 && !isWinner){
            draw();
        }
});
});

const checkWinner = () => {
    for(let pattern of winner){
        let pos1Val=boxs[pattern[0]].innerText;
        let pos2Val=boxs[pattern[1]].innerText;
        let pos3Val=boxs[pattern[2]].innerText;
        if(pos1Val!= "" && pos2Val!= "" && pos3Val!= ""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                //console.log("Winner");
                showWinner(pos1Val);
                return true;
            }
        }
    }
    return false;
};

const disableBoxes=()=>{
    for(let box of boxs)
    box.disabled=true;
}

const enableBoxes=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const resetGame=()=>{
    turnX=true;
    enableBoxes();
    msg.classList.add("hide");
}

const draw=()=>{
    msg.innerText="It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);
