const boxes=document.querySelectorAll(".box")
valO=true
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(valO){
            box.innerHTML="O"
            valO=false
        }else{
            box.innerHTML="X"
            valO=true 
        }
        box.disabled=true
        checkWinner()
    })
})
const checkWinner=()=>{
    for (const pattern of winPatterns) {
        let p1=boxes[pattern[0]].innerText
        let p2=boxes[pattern[1]].innerText
        let p3=boxes[pattern[2]].innerText
        if(p1!=="" && p2!="" && p3 && p3!=""){
            if(p1==p2 && p2==p3){
                winnerMsg(p1)
            }
        }
    }
}
const winnerMsg=(p1)=>{
    document.getElementById("msg").innerText=`${p1}, is the Winner`
    disableBoxes()
}
const disableBoxes=()=>{
    for (const element of boxes) {
        element.disabled=true
    }
}
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]