let wrapper = document.getElementById('wrapper');
let button = document.getElementById('button-body');
let circle = document.getElementById('circle');
let dark = false;

circle.addEventListener('click', ()=>{

        if(!dark){

            dark = !dark
            wrapper.style.backgroundColor = "#333"
            wrapper.style.color = '#ccc'
            button.style.borderColor = "#ccc"
            circle.style.backgroundColor = "#ccc"
            circle.style.left = "60%"
        }else{

            dark = !dark
            wrapper.style.backgroundColor = "#ccc"
            wrapper.style.color = '#333'
            button.style.borderColor = "#333"
            circle.style.backgroundColor = '#333'
            circle.style.left = "0%"
        }

    })

