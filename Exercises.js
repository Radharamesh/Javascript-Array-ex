/* eslint-disable no-shadow */
/* eslint-disable no-console */

// 1. Count Females
const totalFemales = (people) => {
  return people.reduce(
    (counter, person) => counter + (person.gender === "Female"),
    0
  );
};

// 2. Find age > 35
const peopleOver35 = (people) => people.filter((person) => person.age > 35);

// 3. Total age of all people
const ageOfAllSummed = (people) => {
  return people.reduce((sum, person) => sum + person.age, 0);
};

// 4. Average age of all people
const averageAgeOfAll = (people) =>
  Math.round(ageOfAllSummed(people) / people.length);

// 5. Percentage of people older than 50.
const percentageOfPeopleOver50 = (people) => {
  return Math.round(
    (people.reduce((sum, person) => sum + (person.age > 50), 0) /
      people.length) *
      100
  );
};

// 6. Calculate the average age of everyone who is younger than 64
const averageAgeUnder64 = (people) => {
  return Math.round(
    people.reduce(
      (sum, person) => (person.age < 64 ? sum + person.age : sum),
      0
    ) / people.filter((person) => person.age < 64).length
  );
};
// 7. Find the largest age gap between two consecutive people.
const ageGap = (people) => {
  return (
    people.reduce(
      (maxAge, person) => (person.age > maxAge ? person.age : maxAge),
      people[0].age
    ) -
    people.reduce(
      (minAge, person) => (person.age < minAge ? person.age : minAge),
      people[0].age
    )
  );
};

// 8. Count the number of males that are younger than 43 but older than 22.
const malesLagom = (people) => {
  return people.reduce((counter, person) => {
    if (person.gender === "Male" && person.age < 43 && person.age > 22) {
      return counter + 1;
    }
    return counter;
  }, 0);
};

// 9. Count the number of people who starts their first name with the letter L.
const nameWithL = (people) => {
  return people.reduce(
    (count, person) => count + (person.first_name[0] === "L"),
    0
  );
};

// 10. Count the average age of everyone who is between the ages of 35 and 80 and their last name starts with the letter D.
const avgCrazyFunctionAgeThing = (people) => {
  return Math.round(
    people.reduce((count, person) => {
      if (person.last_name[0] === "D" && person.age > 35 && person.age < 80) {
        return count + person.age;
      }
      return count;
    }, 0) /
      people.reduce((count, person) => {
        if (person.last_name[0] === "D" && person.age > 35 && person.age < 80) {
          return count + 1;
        }
        return count;
      }, 0)
  );
};

// 11. Increment the age with 1 year if first name that starts with K and last name ends s.
const ageModList = (people) => {
  return people.map((person) => {
    if (
      person.first_name[0] === "K" &&
      person.last_name[person.last_name.length - 1] === "s"
    ) {
      person.age += 1;
    }
    return person;
  });
};

module.exports = {
  totalFemales,
  peopleOver35,
  ageGap,
  ageModList,
  ageOfAllSummed,
  nameWithL,
  malesLagom,
  percentageOfPeopleOver50,
  averageAgeOfAll,
  averageAgeUnder64,
  avgCrazyFunctionAgeThing,
};

/*
// *** *** *** Write Answers to JSON Files. *** *** ***

const fs = require("fs");
const people = require("./MOCK_DATA.json");

// writeToJSON takes file-system variable (fs), a file path and the data you want to save and saves it to JSON format.
const writeToJSON = (fileSystem, path, data) => {
  fileSystem.writeFile(path, JSON.stringify(data, null, 2), (err) => {
    if (err) throw err;
    console.log(`${data} Written to ${path}.`);
  });
};

writeToJSON(fs, "./JSON Files/1.json", totalFemales(people));
writeToJSON(fs, "./JSON Files/2.json", peopleOver35(people));
writeToJSON(fs, "./JSON Files/3.json", ageOfAllSummed(people));
writeToJSON(fs, "./JSON Files/4.json", averageAgeOfAll(people));
writeToJSON(fs, "./JSON Files/5.json", percentageOfPeopleOver50(people));
writeToJSON(fs, "./JSON Files/6.json", averageAgeUnder64(people));
writeToJSON(fs, "./JSON Files/7.json", ageGap(people));
writeToJSON(fs, "./JSON Files/8.json", malesLagom(people));
writeToJSON(fs, "./JSON Files/9.json", nameWithL(people));
writeToJSON(fs, "./JSON Files/10.json", avgCrazyFunctionAgeThing(people));
writeToJSON(fs, "./JSON Files/11.json", ageModList(people));
*/
