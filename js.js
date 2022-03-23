var but = document.getElementById("but").classList;
var con;
function klik(){

    for(i =1 ; i<=5;i++){
        if(but=="navbar-toggler"){
        con= document.getElementById("container"+i)
        con.style.paddingTop= "51vh";
        if(i==5){
            but="navbar-toggler 2"
        }
        }
        else if(but=="navbar-toggler 2"){
        con= document.getElementById("container"+i);
        con.style.paddingTop= "15vh";
         if (i==5){
             but="navbar-toggler"
         }
        }
    }
}



