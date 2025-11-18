(function(){
    const displayInput=document.getElementById("display");

    window.appendInput=function(input){
        displayInput.value+=input;
    }

    window.calculate=function(){
        try{
            displayInput.value=eval(displayInput.value);
        }
        catch(error){
            displayInput.value="Error";
        }
    }

    window.clearInput=function(){
        displayInput.value="";
    }
})();