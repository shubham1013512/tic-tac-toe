let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;

}
let count = 0;


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true){//playerO
            box.innerText = "O";
            box.style.color = "#8cb7a2";
            // box.classList.add("playerO");
            // box.classList.remove("playerX");
            turnO = false;

        }else{//playerX
            box.innerText = "X";
            box.style.color = "#587e6d";
            // box.classList.add("playerX");
            // box.classList.remove("playerO");
            turnO = true;
        }
        
        
        box.disabled = true;

        checkWinner();
        count++;
        
    });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true ;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false ;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2] );
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]] );
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner", pos1Val);
                showWinner(pos1Val);
                return;

            }else if(count == 8 ){
                msg.innerText = "it's a draw, Play again";
                msgContainer.classList.remove("hide");
                // console.log("draw");
            }
        }

    }
}

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

// const draw = () => {
//     for (let box of boxes){
        
//         if(box[count] != "" && count == 8){
//             msg.innerText = "it's a draw, please play again";
//             msgContainer.classList.remove("hide");
//         }
//     }
    
// }