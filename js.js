var but = document.getElementById("but").classList;
var con;
function klik(){

    for(i =1 ; i<=5;i++){
        if(but=="navbar-toggler"){
        con= document.getElementById("container"+i)
        con.style.paddingTop= "60vh";
        if(i==5){
            but="navbar-toggler 2"
        }
        }
        else if(but=="navbar-toggler 2"){
        con= document.getElementById("container"+i);
        con.style.paddingTop= "25vh";
         if (i==5){
             but="navbar-toggler"
         }
        }
    }
}



