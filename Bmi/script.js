function callvalue(){
    var h= document.getElementById("height").value;
    var w= document.getElementById("weight").value;
    var r=h*h ;
    var y=Math.floor(w/r);
 
    if(y<18){
        alert("YOUR BMI : "+y+"  YOU ARE UNDER-WEIGHT");
    }
    else if(y>=18 && y<=25){
        alert("YOUR BMI : "+y+"  YOUR BMI IS PERFECT");
    }
    else{
        alert("YOUR BMI : "+y+"  YOU ARE OVER-WEIGHT");
    }
 }
 