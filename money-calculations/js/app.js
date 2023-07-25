document.getElementById('calculateBtn').addEventListener('click', function(){
    const incomeText = document.getElementById('income').value;
    const income = parseFloat(incomeText);
    //console.log(income);


    const foodExpenceText = document.getElementById('foodExpence').value;
    const foodExpence = parseFloat(foodExpenceText);
    

    const rentExpenceText = document.getElementById('rentExpence').value;
    const rentExpence = parseFloat(rentExpenceText);

    const clothesExpenceText = document.getElementById('clothesExpence').value;
    const clothesExpence = parseFloat(clothesExpenceText);

    const totalExpence = foodExpence+rentExpence + clothesExpence;

    //console.log(totalExpence);


if(income<totalExpence)
{

 alert('insuficient balance!!! please incress your income \n or\n deress expence ');
    
}
else

    {
        document.getElementById('showTotalExpece').innerText= totalExpence;

        const balance = income-totalExpence;
        document.getElementById('balance').innerText= balance;
    }
});



document.getElementById('save').addEventListener('click', function()
    {
        const incomeText = document.getElementById('income').value;
        const income = parseFloat(incomeText);
    const savingsPersentText = document.getElementById('savingsPersent').value;
    const savingsPersent = parseFloat(savingsPersentText);

    const savingsAmount = (income*savingsPersent)/100;
   //console.log(savingsAmount);

    
     const balanceText =document.getElementById('balance').innerText;
     const balance = parseFloat(balanceText);
        //console.log(savingsAmount)
       // console.log(balance)

    if(savingsAmount>balance)
    {

        alert('insuficient balance FOR SAVINGS !!! please incress your income');
    }
    else{
        document.getElementById('savingsAmount').innerText=savingsAmount;

        const remainingBalance = balance - savingsAmount;
        document.getElementById('remainingBalance').innerText=remainingBalance;

    }
    });