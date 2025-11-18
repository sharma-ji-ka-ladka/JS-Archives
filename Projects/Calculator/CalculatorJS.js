const displayInput=document.getElementById("display");
function appendInput(input){
    display.value+=input;
}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        displayInput.value="Error";
    }
}
function clearInput(){
    displayInput.value="";
}