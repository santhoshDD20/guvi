var todosAPi = "https://restcountries.com/v3.1/all";
var todoRequest = new XMLHttpRequest();

todoRequest.onreadystatechange = function () {
  var data = JSON.parse(this.response);
  console.log(data);
};

todoRequest.open("GET", todosAPi);
todoRequest.send();

console.log(todoRequest);