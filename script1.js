let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn");
let newBtn=document.querySelector("#new_btn");
let msgCon=document.querySelector(".msg-con");
let msg1=document.querySelector("#msg");
let turn0=true;

const winPatterns=[
    [0,1,2] ,
    [0,3,6] ,
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] ,
    [2,4,6] ,
    [3,4,5] ,
    [6,7,8]

];
const resetGame =()=>{
    turn0=true;
    enableboxes();
    msgCon.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
});
const enableboxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableboxes= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
    msg1.innerText='Congratulations , Winner ';
    msgCon.classList.remove("hide");
    disableboxes();
}
const checkwinner = ()=>{
    for(let p of winPatterns){
    let pos1=boxes[p[0]].innerText;
    let pos2=boxes[p[1]].innerText;
    let pos3=boxes[p[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            showwinner(pos1);
        }
    }

}
};
newBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);