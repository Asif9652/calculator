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


document.addEventListener("keydown", (e)=>{
    if("1234567890%^*().-/+".includes(e.key)){
    display.value=display.value+e.key;}
       if(e.key === "Enter"){
        try{
            display.value = eval(display.value);
        }
        catch{
            display.value = "Error";
        }
    }

      if(e.key === "Backspace"){
        display.value = display.value.slice(0,-1);
    }

    if(e.key === "Escape"){
        display.value = "";
    }
});

document.addEventListener("keydown",(e)=>{
    let btn = document.getElementById("btn"+e.key);
    if(btn){
        btn.classList.add("active-key");

        setTimeout(()=>{
            btn.classList.remove("active-key");
        },100);
    }

});