let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let cancel = document.getElementById('cancel');
let box = document.getElementById('box');
let arr = []

btn.addEventListener('click', () => {
    arr.push(inp.value)
    fun1(arr)
})

const fun1 = () => {
    box.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        box.innerHTML += `<div class="TaskStyle rounded p-4 text-center m-auto">${arr[i]}
        <i class="fa-solid fa-trash" onclick="DeleteFunc(${i})" style="cursor:pointer"></i>        
        <i class="fa-solid fa-pen" onclick="UpdateFunc('${arr[i]}',${i})" style="cursor:pointer"></i>
        </div>
        `
    }
}
cancel.addEventListener('click', () => {
    inp.value = ""
})

const DeleteFunc = (i) => {
    arr.splice(i, 1)
    fun1()
}

const UpdateFunc = (elem,i) => {
    let UpdatedVal = prompt("Enter The Updated Task..",elem)
    arr.splice(i,1,UpdatedVal)
    fun1()
}