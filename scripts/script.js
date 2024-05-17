"use script";

window.onload = init();

function init(){
    const morgButton = document.getElementById("morgBtn");
    morgButton.onclick = morgFunction;

    const compButton = document.getElementById("compBtn");
    compButton.onclick = compFunction;

    const annuButton = document.getElementById("annuBtn");
    annuButton.onclick = annuFunction;
}

function morgFunction(){ 

    const principalValue = document.getElementById("principalAmount").value;
    const percentAnnuRate = document.getElementById("interestRate").value;
    const loanLength = document.getElementById("mortgageTerm").value;
    const compPerYear = document.getElementById("compPerYear").value;

    let interestAnnuRate = Number((percentAnnuRate/100).toFixed(2));

    console.log(principalValue);
    console.log(interestAnnuRate);
    console.log(loanLength);

    let loanMonths = loanLength * 12; // Convert loan length from years to months 

    let interestMonthRate = interestAnnuRate / 12; // Convert annual interest rate to a monthly rate 
    
    // Calculate monthly payment 
    let monthlyPayment = principalValue * (interestMonthRate / (1 - Math.pow((1 + interestMonthRate), -loanMonths))); 

    //Calculate compounded interest
    let compoundedInterest = (principalValue * Math.pow((1+(interestAnnuRate/compPerYear)),(loanLength*compPerYear)));

    document.getElementById("displayMorgAnswer").innerHTML ="With a principal amount of $" + principalValue + ". "
                                                            +"And an interest rate of " + percentAnnuRate + "%. "
                                                            +"On a mortgage term of " + loanLength + " years. " 
                                                            +"Your monthly payment will be $" + monthlyPayment.toFixed(2) + "."; 
    document.getElementById("displayMorgAnswer2").innerHTML ="With a compounded interest of $" + compoundedInterest.toFixed(2) + ".";
} 

function compFunction(){
    const depositAmount = document.getElementById("compPrincipalAmount").value;
    const compInterestRate = document.getElementById("compInterestRate").value;
    const numberOfYears = document.getElementById("numberOfYears").value;

    console.log(depositAmount);
    console.log(compInterestRate);
    console.log(numberOfYears);

    let dailyInterestRate = Number((compInterestRate/100).toFixed(2));
    let dailyCompound = 365;
    let numberOfDays = numberOfYears * dailyCompound;

    let futureValue = depositAmount * Math.pow((1+(dailyInterestRate/dailyCompound)),numberOfDays);
    futureValue = Math.round(futureValue);

    document.getElementById("displayCompAnswer").innerHTML = "With a deposit of $" + depositAmount + ". "
                                                            +"And an interest rate of " + compInterestRate + "%. "
                                                            +"Within the time range of " + numberOfYears + " years. "
                                                            +"Your daily compounded value for the future will be $" + futureValue + "."; 
}   

function annuFunction(){
    const periodPayment = document.getElementById("periodCash").value;
    const percentRatePeriod = document.getElementById("interestRatePeriod").value;
    const numberOfPeriods = document.getElementById("numberOfPeriod").value;

    console.log(periodPayment);
    console.log(percentRatePeriod);
    console.log(numberOfPeriods);

    let interestRatePeriod = Number((percentRatePeriod/100).toFixed(2));



    // PresentValue = PMT * ((1 - (1+r)^-n)/r)
    let presentValue = periodPayment * ((1 - (Math.pow(1+interestRatePeriod,-numberOfPeriods)))/interestRatePeriod);
    presentValue = Math.round(presentValue);

    // display results
    document.getElementById("displayAnnuAnswer").innerHTML = "With a monthly payout of $" + periodPayment + ". "
                                                            +"And an expected interest rate of " + percentRatePeriod + "%. "
                                                            +"Within the time range of " + numberOfPeriods + " year(s). "
                                                            +"Your ordinary annuity for the future will be $" + presentValue + ".";
}




