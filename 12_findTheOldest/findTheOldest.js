const findTheOldest = function(people) {
    oldest = people.sort(function(a,b){
        Array.from(arguments).forEach(function(argument){
            if(argument.yearOfDeath==undefined){
                argument.yearOfDeath = new Date().getFullYear();
            }
        });
        livedA = a.yearOfDeath - a.yearOfBirth;
        livedB = b.yearOfDeath - b.yearOfBirth;
        return livedB- livedA;
    })[0];
    return oldest;
};
findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]);
// Do not edit below this line
module.exports = findTheOldest;
