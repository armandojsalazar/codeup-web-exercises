let gitDateLastCommit = (username) => {
    let url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': 'token 5676a1d4afd953e699ba0f6bd6c1bc18d0569cfe'}})
}

gitDateLastCommit("armandojsalazar")
    .then(response => response.json())
    .then(events => events.filter(event => event.type === "PushEvent"))
    .then(pushEvents => console.log(pushEvents))

