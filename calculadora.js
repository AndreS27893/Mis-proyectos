window.addEventListener('load',()=>{
    const display= document.querySelector(["calculadora-display"]);
    const keypadButtons= document.getElementsByClassName('botones-de-numeros');  
    
    const keypadButtonsArray= Array.from(keypadButtons);
    keypadButtonsArray.forEach( (button) => {
        button.addEventListener("click",()=>{
            console.log(button.innerHTML)
        })
    });
});
