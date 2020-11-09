// Imports
const {
  totalFemales,
  peopleOver35,
  ageOfAllSummed,
  averageAgeOfAll,
  percentageOfPeopleOver50,
  averageAgeUnder64,
  ageGap,
  malesLagom,
  nameWithL,
  avgCrazyFunctionAgeThing,
  ageModList,
} = require("../Exercises");
// Input Data
const input = [
  {
    id: 7,
    first_name: "Minne",
    last_name: "MacGilfoyle",
    email: "mmacgilfoyle6@amazon.co.jp",
    gender: "Female",
    ip_address: "12.246.212.112",
    age: 54,
  },
  {
    id: 8,
    first_name: "Lurcell",
    last_name: "Mearns",
    email: "pmearns7@chicagotribune.com",
    gender: "Male",
    ip_address: "60.16.88.134",
    age: 24,
  },
  {
    id: 9,
    first_name: "Amanda",
    last_name: "Gownge",
    email: "agownge8@t.co",
    gender: "Female",
    ip_address: "246.160.41.135",
    age: 95,
  },
  {
    id: 10,
    first_name: "Kybie",
    last_name: "Tills",
    email: "ttille9@cargocollective.com",
    gender: "Female",
    ip_address: "82.56.248.7",
    age: 30,
  },
];

describe("People Object Manipulation in Array Tests.", () => {
  test("Count number of females from persons array", () => {
    const output = 3;
    expect(totalFemales(input)).toEqual(output);
  });

  test("Count number of people over 35 in array", () => {
    const output = [
      {
        id: 7,
        first_name: "Minne",
        last_name: "MacGilfoyle",
        email: "mmacgilfoyle6@amazon.co.jp",
        gender: "Female",
        ip_address: "12.246.212.112",
        age: 54,
      },
      {
        id: 9,
        first_name: "Amanda",
        last_name: "Gownge",
        email: "agownge8@t.co",
        gender: "Female",
        ip_address: "246.160.41.135",
        age: 95,
      },
    ];
    expect(peopleOver35(input)).toEqual(output);
  });

  test("Age of all people summed in array", () => {
    const output = 203;
    expect(ageOfAllSummed(input)).toEqual(output);
  });

  test("Average age of all people in array", () => {
    const output = 51;
    expect(averageAgeOfAll(input)).toEqual(output);
  });

  test("Percentage of people older than 50 in array", () => {
    const output = 50;
    expect(percentageOfPeopleOver50(input)).toEqual(output);
  });

  test("Calculate the average age of everyone who is younger than 64 in array", () => {
    const output = 36;
    expect(averageAgeUnder64(input)).toEqual(output);
  });

  test("Largest age gap in array", () => {
    const output = 71;
    expect(ageGap(input)).toEqual(output);
  });

  test("Count the number of males that are younger than 43 but older than 22", () => {
    const output = 1;
    expect(malesLagom(input)).toEqual(output);
  });

  test("Count the number of people who starts their first name with the letter L.", () => {
    const output = 1;
    expect(nameWithL(input)).toEqual(output);
  });

  test("Count the average age of everyone who is between the ages of 35 and 80 and their last name starts with the letter D", () => {
    const output = NaN;
    expect(avgCrazyFunctionAgeThing(input)).toEqual(output);
  });

  test("Increment the age with 1 year if first name that starts with K and last name ends s", () => {
    const output = [
      {
        id: 10,
        first_name: "Kybie",
        last_name: "Tills",
        email: "ttille9@cargocollective.com",
        gender: "Female",
        ip_address: "82.56.248.7",
        age: 31,
      },
    ];
    expect(ageModList([input[3]])).toEqual(output);
  });
});
