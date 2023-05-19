const users = [
  { name: "John", age: 25, occupation: "gardener" },
  { name: "Lenny", age: 51, occupation: "programmer" },
  { name: "Andrew", age: 43, occupation: "teacher" },
  { name: "Peter", age: 81, occupation: "teacher" },
  { name: "Anna", age: 43, occupation: "teacher" },
  { name: "Albert", age: 76, occupation: "programmer" },
  { name: "Adam", age: 47, occupation: "teacher" },
  { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
  const root = document.querySelector("#root");
  const h1 = document.createElement("h1");
  h1.innerText = "FREELANCERS";
  root.appendChild(h1);
}
//call the main function
main();

const personName = freelancerNames();
function freelancerNames() {
  const personName = document.createElement("h3");
  personName.innerText = "Name";
  root.appendChild(personName);
}

const ulName = usersNameList();
root.appendChild(ulName);
function usersNameList() {
  const ul = document.createElement("ul");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = `${user.name}`;
    ul.appendChild(li);
  }
  return ul;
}

const age = freelancerAges();
function freelancerAges() {
  const age = document.createElement("h3");
  age.innerText = "Age";
  root.appendChild(age);
}

const ulAge = usersAgeList();
root.appendChild(ulAge);
function usersAgeList() {
  const ul = document.createElement("ul");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = `${user.age}`;
    ul.appendChild(li);
  }
  return ul;
}

const occupation = freelancerOccupations();
function freelancerOccupations() {
  const occupation = document.createElement("h3");
  occupation.innerText = "Occupation";
  root.appendChild(occupation);
}

const ulOccupation = usersOccupationList();
root.appendChild(ulOccupation);
function usersOccupationList() {
  const ul = document.createElement("ul");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = `${user.occupation}`;
    ul.appendChild(li);
  }
  return ul;
}
