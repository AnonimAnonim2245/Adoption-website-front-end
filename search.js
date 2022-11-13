function openPage(){
    var x = document.getElementById("search").value;
    var op = x.toLowerCase();
    if( op=== "câine" || op==="caine"){
        window.open("/static/dog.html");
    }
    if( op==="pisică" || op==="pisica"){
        window.open("/static/cat.html");
    }
    if( op==="hamster"){
        window.open("/static/hamster.html");
    }
    if( op==="iepure"){
        window.open("/static/bunny.html");
    }
}

