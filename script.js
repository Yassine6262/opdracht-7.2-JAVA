function geld(){
    
    let budget = prompt("Hoeveel kost het product dat je wilt kopen?")
    let product = 60;
    
    
    if( budget > product){
        document.getElementById("tekst1").style.color = "green";
        document.getElementById("tekst1").innerHTML="genoeg geld";
    }
    else{ 
        document.getElementById("tekst1").style.color = "red";
        document.getElementById("tekst1").innerHTML="te weinig geld";
    }

}




