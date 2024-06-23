const sum =()=>{
    let a = document.getElementById("no1").value;
    let b = document.getElementById("no2").value;
    if(a==="" || b===""){
        document.getElementById("container").innerHTML="please enter something";
        return;
     }
     if(isNaN(parseInt(a)) || isNaN(parseInt(b))){
        document.getElementById("container").innerHTML="please enter a valid number";
        return;
     }
    let c = parseInt(a)+parseInt(b);
    document.getElementById("container").innerHTML="the addition of number is "+c;

}