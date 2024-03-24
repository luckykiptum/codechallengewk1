
//Function "grossIncome" that takes in two parameters "basicSalary , allowance"

function grossIncome (basicSalary ,allowances){

    const grossPay = basicSalary + allowances;
    
    return grossPay;
 }
 
//function nhifRates with two parameters "basicSalary" , "allowance"
//function returns the rates for NHIF depending on the grossincome
 function nhifRates (basicSalary,allowances){
    const grossIncomeValue = grossIncome(basicSalary,allowances)

if (grossIncomeValue<= 5999){
     
return 150;
}
 else if( grossIncomeValue >=6000 && grossIncomeValue <=7999){

    return 300;
 }
 else if( grossIncomeValue >=8000 && grossIncomeValue <=11999){

    return 400;
 }   

 else if( grossIncomeValue >=12000 && grossIncomeValue <=14999){

    return 500;
 }   
 else if( grossIncomeValue >=15000 && grossIncomeValue <=19999){

    return 600;
 }   
 else if( grossIncomeValue >=20000 && grossIncomeValue <=24999){

    return 750;
 }   
 else if( grossIncomeValue >=25000 && grossIncomeValue <=29999){

    return 850;
 }   
 else if( grossIncomeValue >=30000 && grossIncomeValue <=34999){

    return 900;
 }   
 else if( grossIncomeValue >=35000 && grossIncomeValue <=39999){

    return 950;
 }   
 else if( grossIncomeValue >=40000 && grossIncomeValue <=44999){

    return 1000;
 }   
 else if( grossIncomeValue >=45000 && grossIncomeValue <=49999){

    return 1100;
 }   
 else if( grossIncomeValue >=50000 && grossIncomeValue <=59999){

    return 1200;
 }   
 else if( grossIncomeValue >=60000 && grossIncomeValue <=69999){

    return 1300;
 }   
 else if( grossIncomeValue >=70000 && grossIncomeValue <=79999){

    return 1400;
 }   
 else if( grossIncomeValue >=80000 && grossIncomeValue <=89999){

    return 1500;
 }   
 else if( grossIncomeValue >=90000 && grossIncomeValue <=99999){

    return 1600;
 }   
 else {

    return 1700;
 }
}
//Function returns the NSSF deduction
function nssfRates (basicSalary , allowances){

    const grossIncomeValue= grossIncome (basicSalary ,allowances)
      
    const nssfToBeDeducted =grossIncomeValue * 0.06

    return  nssfToBeDeducted;
     
}
//function returns the deductablee houselevy
function houseLevy(basicSalary ,allowances){

    const grossIncomeValue = grossIncome( basicSalary , allowances)
     
    const houseLevyToBeDeducted = grossIncomeValue * 0.015

    return houseLevyToBeDeducted;
}
//function returns the taxableincome
function taxableIncome(basicSalary , allowances){

    const grossIncomeValue = grossIncome( basicSalary,allowances)
    
    const nssfToBeDeducted = nssfRates (basicSalary , allowances)

    const nhifR = nhifRates ( basicSalary, allowances)

    const houseCharge = houseLevy ( basicSalary , allowances)

    const taxableCharge =  grossIncomeValue -( nssfToBeDeducted + nhifR +houseCharge)

    return taxableCharge;
     
}
//function netSalary with two parameters "basicSalary" , "allowance"
//function returns the netSalary depending on the taxable income
function netSalary(basicSalary,allowances) {

    const grossIncomeValue = grossIncome( basicSalary,allowances)
    
    const nssfToBeDeducted = nssfRates (basicSalary , allowances)

    const nhifR = nhifRates ( basicSalary, allowances)

    const houseCharge = houseLevy ( basicSalary , allowances)

    const income =  grossIncomeValue -( nssfToBeDeducted + nhifR +houseCharge)

    if (income <= 24000) {
        return income * 0.10;
    } else if (income >= 24001 && income <= 32333) {
        return income * 0.25;
    } else if (income >= 32334 && income <= 500000) {
        return income * 0.30;
    } else if (income >= 500001 && income <= 800000) {
        return income * 0.32;
    } else {
        return income * 0.35;
    }


}
console.log(netSalary(30000,1000))




    


    



