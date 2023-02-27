let countEl= document.getElementById("count-El");
let saveEl= document.getElementById("save-El")

let count = 0

function increment() {
    count = count+1;
    console.log(count)
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr 

    countEl.textContent = 0
    count = 0


}