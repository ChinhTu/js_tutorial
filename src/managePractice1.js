// Random function
function randomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Create prototype
const Person = function (fullName, age, email, gender, height, weight) {
  this.fullName = fullName;
  this.age = age;
  this.email = email;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
  (this.calculateBMI = () => {
    return this.weight / Math.pow(this.height, 2);
  })();
  this.guessHealth = () => {
    let BMI = this.calculateBMI().toFixed(1);

    if (BMI < 18.5) {
      return "Underweight";
    }
    if (18.5 <= BMI <= 24.9) {
      return "Normal weight";
    }
    if (25 <= BMI <= 29.9) {
      return "Overweight";
    }
    return "Obesity";
  };
};

// Data arrays
const dataArray = [];
const limit = 10;
const names = [
  "cris",
  "kevin",
  "karim",
  "angelina",
  "robert",
  "kate",
  "luke",
  "lee",
  "takehiro",
  "chinh",
];
const ages = [18, 34, 33, 21, 28, 30];
const emails = [
  "cris@gmail.com",
  "kevin@gmail.com",
  "angelina@gmail.com",
  "kate@gmail.com",
  "kristen@gmail.com",
];
const genders = ["male", "female", "other"];
const heights = [1.86, 1.7, 1.66, 1.58, 1.77, 1.88];
const weights = [66, 54, 88, 102, 77, 65];

for (let count = 0; count < limit; count++) {
  const person = new Person(
    names[randomInt(0, 9)],
    ages[randomInt(0, 5)],
    emails[randomInt(0.4)],
    genders[randomInt(0, 2)],
    heights[randomInt(0, 5)],
    weights[randomInt(0, 5)]
  );
  dataArray.push(person);
}

const bonusProperty = dataArray.map((obj) => {
  obj.BMI = obj.calculateBMI().toFixed(1);
  obj.healthStt = obj.guessHealth();

  return obj;
});

console.log(dataArray);
