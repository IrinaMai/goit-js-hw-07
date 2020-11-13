const findBestEmployee = function(employees) {
  const values = Object.values(employees);
  let bestEmployeer = '';

  // console.log('values :>> ', values);

  const maxValue = Math.max(...values);
  // console.log('maxValue :>> ', maxValue);

  for (const key in employees) {
    // console.log('key', key);
    // console.log('employees[key]', employees[key]);

    if (employees[key] === maxValue) {
    bestEmployeer = key;
    }

  }

  return bestEmployeer
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux