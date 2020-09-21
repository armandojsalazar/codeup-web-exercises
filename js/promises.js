let gitDateLastCommit = (username) => {
    let url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': 'token 5676a1d4afd953e699ba0f6bd6c1bc18d0569cfe'}})
        .then(response => response.json())
        .then(events => events.filter(event => event.type === "PushEvent"))
        .then(pushEvents => pushEvents[0].created_at)
        .catch(error => console.error(error));
}

document.getElementById('lookitup').addEventListener("click", ()=>{
    // ev.preventDefault();
    let username = document.getElementById('username').value;
    gitDateLastCommit(username)
        .then(date => {
            document.getElementById('output').innerText = date;
        })
})


const wait = (ms) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve("Hello World")
        }, ms);
    })
}
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
wait(1000).then(() => console.log('You\'ll see this after 1 second'));

let random = Math.floor(Math.random()*5000);
wait(random).then(() => console.log(`You'll see this after ${random/ 1000}`))


