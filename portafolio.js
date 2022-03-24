let writing = str =>{
    let arrFromStr= str.split('');
    let i =0
    let printStr= setInterval( function(){
        document.querySelector('h1').innerHTML += arrFromStr[i]; i++;
        if(i===arrFromStr.length ){
            clearInterval(printStr);}},400);
            
    
};
writing('Hola soy Andres')
