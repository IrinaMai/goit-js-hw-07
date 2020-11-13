
const countTotalSalary = (employees) => {
    
  let totalSumm = 0;

  for (const key in employees) {
    totalSumm += employees[key]
    
  }
 
    const values = Object.values(employees);
   
    // if (values.length) {
    //     for (const value of values) {
    //     totalSumm += value
    //     } 
    // } 

   return totalSumm

}


console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
