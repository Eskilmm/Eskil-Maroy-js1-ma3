console.log("Question 2");

document.querySelector("button#rawgAPI").addEventListener("click", getList);
const out = document.querySelector("#result");

function getList() {
fetch("https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=03c8d5021d4c49e88b9663c9dc977f1e")

.then(response => response.json())

return response.json();

}
