const todoinp=document.querySelector('.todo-input');
const btn=document.querySelector('.todo-button');
const list=document.querySelector('.todo-list');

document.addEventListener('DOMContentLoaded',gettodos);
btn.addEventListener('click',todo);
list.addEventListener('click',deleteCheck);


function todo(event){
    event.preventDefault();

    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");
    
    const newtodo=document.createElement("li");
    newtodo.innerText=todoinp.value;  
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);

    savelocalstorage(todoinp.value);

    const compbutton = document.createElement("button");
    compbutton.innerHTML= '<i class="fas fa-check"></i>';
    compbutton.classList.add("complete-btn");
    tododiv.appendChild(compbutton);

    const trashbutton = document.createElement("button");
    trashbutton.innerHTML='<i class="fas fa-trash"></i>';
    trashbutton.classList.add("trash-btn");
    tododiv.appendChild(trashbutton);

    list.appendChild(tododiv);
    
    todoinp.value="";

}


function deleteCheck(e){
    const item = e.target;
    if(item.classList[0]==='trash-btn'){
        const it= item.parentElement;
        it.classList.add("fall");
        removelocalstorage(it);
        // console.log(it);
        it.addEventListener('transitionend',()=>{
            it.remove();    
        });
        
    }

    if(item.classList[0]==='complete-btn'){
        const it= item.parentElement;
        it.classList.toggle('completed');
    }
}


function savelocalstorage(todo){

    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }


    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}

function gettodos(){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(todo => {
        const tododiv = document.createElement("div");
        tododiv.classList.add("todo");
        
        const newtodo=document.createElement("li");
        newtodo.innerText=todo;  
        newtodo.classList.add('todo-item');
        tododiv.appendChild(newtodo);

        const compbutton = document.createElement("button");
        compbutton.innerHTML= '<i class="fas fa-check"></i>';
        compbutton.classList.add("complete-btn");
        tododiv.appendChild(compbutton);

        const trashbutton = document.createElement("button");
        trashbutton.innerHTML='<i class="fas fa-trash"></i>';
        trashbutton.classList.add("trash-btn");
        tododiv.appendChild(trashbutton);

        list.appendChild(tododiv);       
    });
}


function removelocalstorage(todo){
    
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }

    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    
    const todoindex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoindex),1);
    localStorage.setItem('todos',JSON.stringify(todos));    
    
}
