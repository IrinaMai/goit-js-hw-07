import users from "./list.js"

//============TASK 1======================
const getUserNames = users => {
  return users.map(({ name }) => name);
};

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 
//'Ross Vazquez', 'Elma Head', 'Carey Barr', 
//'Blackburn Dotson', 'Sheree Anthony' ]


//============TASK 2======================
const getUsersWithEyeColor = (users, color) => {
  return users.filter(({ eyeColor }) => (eyeColor === color));
};

// console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, 
//объект Carey Barr]

//============TASK 3======================

const getUsersWithGender = (users, gender) => {
  return users
  .filter(item => (item.gender === gender))
  .map(({name}) => name)
  
};

// console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 
//'Carey Barr', 'Blackburn Dotson' ]

//============TASK 4======================

const getInactiveUsers = users => {
  return users.filter(({ isActive }) => !isActive)

};

// console.log(getInactiveUsers(users));
// [объект Moore Hensley, 
//объект Ross Vazquez, объект Blackburn Dotson]


//============TASK 5======================

const getUserWithEmail = (users, email) => {
  return users.find(item => item.email === email)
};

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//============TASK 6======================

const getUsersWithAge = (users, min, max) => {
  return users.filter(({ age }) => age > min && age < max);

};

// console.log(getUsersWithAge(users, 20, 30));
// // // [объект Ross Vazquez, объект Elma Head,
// // //объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush,
//объект Blackburn Dotson, объект Sheree Anthony]


//============TASK 7======================
const calculateTotalBalance = users => {
  return users.reduce((acc, item) => acc + item.balance ,0)
};

// console.log(calculateTotalBalance(users)); // 20916

//============TASK 8======================
const getUsersWithFriend = (users, friendName) => {
  const friends = users.filter(item => {
   return item.friends.includes(friendName)
  })
    return friends.map(({name})=> name)
};

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// // // // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

//============TASK 9======================
const getNamesSortedByFriendsCount = users => {
 

};

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 
//'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony',
//'Ross Vazquez' ]


//============TASK 10======================
const getSortedUniqueSkills = users => {
 const skills =  users.reduce((acc, item) => {
    acc.push(...item.skills);
    return acc;
  }, []);
  const uniqueSkills = [...new Set(skills)];
  return uniqueSkills.sort();

};

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 
//'culpa', 'elit', 'ex', 'ipsum', 'irure',
//'laborum', 'lorem', 'mollit', 'non', 'nostrud',
//'nulla', 'proident', 'tempor', 'velit', 'veniam' ]