fetch('https://swapi.dev/api/people/68/')
    .then(result => {
        console.log(result)
      return result.json()})
.then(data => console.log(data))

fetch('https://api.github.com/users')
.then(response => response.json())
.then(result => {
    result.forEach(user => console.log(user));
})
.catch(error => console.log(error))