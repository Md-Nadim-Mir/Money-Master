// income-field rent-field food-field cloth-field Calculate-button express-total balance-total save-parcentage save-button saving-amount remaining-amount


// income field
function income() {

    let incomeFieldString = document.getElementById('income-field').value;
    let incomeField = parseFloat(incomeFieldString);
    let incomeField1=incomeField.toFixed(2)
    return incomeField1;
}

// expenses and toal balance calculated;
function calculateBalance(){

    // income function
    let incomeField=income();

    // rent-field
    let rentFieldString = document.getElementById('rent-field').value;
    let rentField = parseFloat(rentFieldString);

    // food-field
    let foodFieldString = document.getElementById('food-field').value;
    let foodField = parseFloat(foodFieldString);

    // // cloth-field
    let clothFieldString = document.getElementById('cloth-field').value;
    let clothField = parseFloat(clothFieldString);

   
   
    if (isNaN(incomeField && rentField && foodField && clothField )) {
        alert('Fill the all input field')
        return 0;
    }



    else{

    // total express
    let totalExpress = rentField + foodField + clothField;
    let totalExpress1=totalExpress.toFixed(2);


    // express field
    document.getElementById('express-total').innerText = totalExpress1;

    

    // Balance total 
    let balance = incomeField - totalExpress1;
    let balance1=balance.toFixed(2);

    
    // balance field
    document.getElementById('balance-total').innerText = balance1;


    return balance;

    }

    

   
}

// calculate add eventListener
document.getElementById('Calculate-button').addEventListener('click', function () {

    calculateBalance();

})


// save button eventListener added
document.getElementById('save-button').addEventListener('click', function () {

    let saveParcentageString = document.getElementById('save-parcentage-field').value;
    let saveParcentage = parseFloat(saveParcentageString);
    console.log(saveParcentage);
    
    //save parcent calculate
    let incomeField=income();
    console.log(incomeField)

    // remaining amount
    // let remainignAmountString=document.getElementById('remaining-amount').value;
    // let remainignAmount=parseFloat(remainignAmountString); 
    // && remainignAmount

     if(isNaN(incomeField && saveParcentage )){

        alert('Fill up saving parcentage and income amount and all input field and press calculate button')
     } 


    
   
   
    else{

        //save value
   


    //calculate balance

    let balance=calculateBalance();
    let balance1=balance.toFixed(2)

    if(balance1==0){
        return ;
    }
    console.log(balance1)


    let saveValue=incomeField*(saveParcentage/100);
    let saveValue1=saveValue.toFixed(2)
    


    //saving amount 
    document.getElementById('saving-amount').innerText=saveValue1;
   

    //remaining balance  
    let remaingBalance=balance1-saveValue1;
   

    //remaing amount
    document.getElementById('remaining-amount').innerText=remaingBalance;

    }
    
    


})




