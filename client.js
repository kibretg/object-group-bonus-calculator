const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

for( let i = 0; i < employees.length; i++ ){ //for loop to loop through the employee array
  bonusCalc(employees[i]); //calling bonus function to run conditional everytime
  
}


function bonusCalc(employee){
    let bonusPercentage = 0;
    if(employee.reviewRating <= 2){
      console.log('no bonus');
    }
    else if(employee.reviewRating === 3){
      console.log('add 4%');
      bonusPercentage += .04;
    }
    else if(employee.reviewRating  === 4){
      console.log('add 6%');
      bonusPercentage += .06;
    }
    else if(employee.reviewRating === 5){
      console.log('add 10%');
      bonusPercentage += .10;
    }
    console.log(bonusPercentage);


  //check Tenure
    if(employee.employeeNumber.length === 4){
    console.log('gets 5% more');
    bonusPercentage += .05;
    console.log(bonusPercentage);
  }
  //check if annual salary is more than $65,000
    if(employee.annualSalary >= 65000){
      console.log('drop 1%');
      bonusPercentage -= .01;
      console.log(bonusPercentage);
    }
  //make sure bonus is no more than 13% and no less 0%
    if(bonusPercentage >= .13){
      bonusPercentage = .13;
    }
    else if(bonusPercentage < 0){
      bonusPercentage = 0;
    }
  

  //create new object
  let empObject = 
    {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalBonus: bonusPercentage * employee.annualSalary,
    totalCompensation: totalBonus + employee.annualSalary
    }
  
  
    
  }

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
