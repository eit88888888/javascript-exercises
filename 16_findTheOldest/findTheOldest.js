const findTheOldest = function(peopleArr) {
    peopleArr.map(item => {
        if (!("yearOfDeath" in item)) {
            item.yearOfDeath = 2025;
        }
    })
    peopleArr.sort((a, b) => {
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    })

    return peopleArr[0];
};































const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]


findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
