const display=document.getElementById("dis");



function appendtodispaly(stri){
     display.value= display.value +stri;
}
function cleardisplay(){
    display.value = "";
}
function calculate(){
    display.value=eval(display.value);
}
function gobackk(){
    let l= display.value;

    display.value=l.slice(0,-1);
}