function findAllHobbyists(hobby, hobbies) {
  const people = [];
  console.log(Object.entries(hobbies));
  Object.entries(hobbies).forEach((nameAndHobbies) => {
    const [name, theHobbies] = nameAndHobbies;
    console.log({ name });
    console.log({ theHobbies });
    if (theHobbies.includes(hobby)) {
      people.push(name);
    }
  });
  return people;
}

var hobbies = {
  Steve: ["Fashion", "Piano", "Reading"],
  Patty: ["Drama", "Magic", "Pets"],
  Chad: ["Puzzles", "Pets", "Yoga"],
};

console.log(findAllHobbyists("Yoga", hobbies));
console.log(findAllHobbyists("Pets", hobbies));
console.log(findAllHobbyists("Reading", hobbies));
