let findTheOldest = function(array) {
    let result=array.sort(function (a, b) {
        let lastPersonDeath=(a.yearOfDeath)?a.yearOfDeath:new Date().getFullYear();
        let nextPersonDeath=(b.yearOfDeath)?b.yearOfDeath:new Date().getFullYear();
        const lastPerson = lastPersonDeath - a.yearOfBirth;
        const nextPerson = nextPersonDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    });
    return result[0];
}
// odinproject solution using reduce 
// const findTheOldest = function(array) {
//     return array.reduce((oldest, currentPerson) => {
//       const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
//       const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
//       return oldestAge < currentAge ? currentPerson : oldest
//     })
//   }
  
//   const getAge = function(birth, death) {
//     if (!death) {
//       death = new Date().getFullYear();
//     }
//     return death - birth;
//   }

module.exports = findTheOldest
