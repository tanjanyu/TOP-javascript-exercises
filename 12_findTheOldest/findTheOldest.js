const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        let currentOldestAge = 0, thisPersonAge = 0;
        oldestPerson.yearOfDeath
        ? currentOldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth
        : currentOldestAge = 2024 - oldestPerson.yearOfBirth;

        person.yearOfDeath
        ? thisPersonAge = person.yearOfDeath - person.yearOfBirth
        : thisPersonAge = 2024 - person.yearOfBirth;

        if(thisPersonAge > currentOldestAge) {
          return person;
        }
        return oldestPerson;
    })
  };

// function getAge()

// Do not edit below this line
module.exports = findTheOldest;
