var down = document.getElementById("down");

setInterval(() =>{
    if(down.style.marginTop=="0vh"){
        down.style.marginTop="6vh";
    }

     else if(down.style.marginTop=="6vh"){
        down.style.marginTop="0vh";
    }
    

},1000);

    




