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

function usersList() {
  const ul = document.createElement("ul");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = `${user.name}: ${user.age}, ${user.occupation}`;
    ul.appendChild(li);
  }
  return ul;
}

const ul = usersList();
root.appendChild(ul);
