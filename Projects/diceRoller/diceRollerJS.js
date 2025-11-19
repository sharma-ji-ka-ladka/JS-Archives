function roll(){
    const diceNum= document.getElementById("dice#").value;
    const result=document.getElementById("result");
    const display =document.getElementById("display");
    if(diceNum>6){
        result.textContent="Sorry, But the maximum number of dice that can be displayed is 6 only :("
        display.innerHTML="";
        return;
    }
    else if(diceNum<0){
        result.textContent="Sorry, But the number of dice to display can't be negative"
        display.innerHTML="";
        return;
    }
    else if(diceNum==0){
        result.textContent="Ok Einstein! With 0 dice to diplay, there's nothing at all to display Genius!"
        display.innerHTML="";
        return;
    }
    const dices=[];
    const diceDisplay=[];
    for(let i=0; i<diceNum; i++){
        const value=Math.floor(Math.random()*6)+1;
        dices.push(value);
        diceDisplay.push(`<img src ="Projects/diceRoller/dice/${value}.png" alt="Dice: ${value}">`)
    }
    result.textContent=`Dice: ${dices.join(", ")}`;
    display.innerHTML=`${diceDisplay.join(" ")}`;
}