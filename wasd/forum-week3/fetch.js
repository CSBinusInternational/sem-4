let response = fetch(url);

fetch('/pets.json')
    .then(response => response.json())
    .then(data => console.log(data));