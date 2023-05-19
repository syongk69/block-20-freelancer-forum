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

  freelancerNames(root);
  freelancerAges(root);
  freelancerOccupations(root);
}

//call the main function
main();

function freelancerNames(root) {
  const h3 = document.createElement("h3");
  h3.innerText = "Name";
  root.appendChild(h3);
  listOfName();
}

function listOfName() {
  document.createElement("ul");
  const li = document.createElement("li");
  li.innerText = users.map((users) => users.name);
  root.appendChild(li);
}

function freelancerAges(root) {
  const h3 = document.createElement("h3");
  h3.innerText = "Age";
  root.appendChild(h3);
  listOfAge();
}

function listOfAge() {
  document.createElement("ul");
  const li = document.createElement("li");
  li.innerText = users.map((users) => users.age);
  root.appendChild(li);
}

function freelancerOccupations(root) {
  const h3 = document.createElement("h3");
  h3.innerText = "Occupation";
  root.appendChild(h3);
  listOfOccupation();
}
function listOfOccupation() {
  document.createElement("ul");
  const li = document.createElement("li");
  li.innerText = users.map((users) => users.occupation);
  root.appendChild(li);
}
