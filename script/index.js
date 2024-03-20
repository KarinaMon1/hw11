const addBlock = document.querySelector('#add_btn');
const delBlock = document.querySelector('#del_btn');
const container = document.querySelector('#container')
const blocks = document.querySelectorAll('.block');
let countBlock;

window.onload = ()=>{
    countBlock = +localStorage.getItem('countBlock');
    if (countBlock == 0) {
        createBlock(3);
        localStorage.setItem('countBlock','3');
    }
    else
        createBlock(countBlock);
};

addBlock.addEventListener('click',()=>{
    createBlock();
    localStorage.setItem('countBlock',`${++countBlock}`);
});

delBlock.addEventListener('click',()=>{
    if(container.hasChildNodes()){
        container.lastElementChild.remove();
        localStorage.setItem('countBlock',`${--countBlock}`);}
});

function createBlock(count = 1){
    for(let i = 0; i < count; i++){
        let newBlock = document.createElement('div');
        newBlock.className = 'block';
        container.appendChild(newBlock);  
    }      
}