window.onload=function(){
    let addbtn = document.getElementById('addBtn');
    let textIn = document.getElementById('textInput');
    let todoWrap = document.getElementById('todoWrap');
    
    addbtn.addEventListener('click', function(){
    var text = document.createElement('p');
    text.classList.add('text.style');
    text.innerText= "• " + textIn.value;
    todoWrap.appendChild(text);
    textIn.value="";
    text.addEventListener('click', function(){
    text.style.textDecoration="line-through";
    });
    text.addEventListener('dblclick', function(){
    todoWrap.removeChild(text);
    });
    });
    };

