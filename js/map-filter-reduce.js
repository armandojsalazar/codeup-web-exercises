const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


const atLeastThreeLanguages = users.filter((user) => user.languages.length >= 3);
console.log(atLeastThreeLanguages);

const userEmails = users.map(user => user.email);
console.log(userEmails);

const totalYearsExp = users.reduce((number, user) => {
    return number + user.yearsOfExperience;
}, 0);
console.log(totalYearsExp);

const averageYearsExp = totalYearsExp / users.length;
console.log(averageYearsExp);

const longestEmail = users.reduce((str, user) =>{
    if(user.email.length > str.length){
        return user.email;
    } else {
        return str;
    }
},'');
console.log(longestEmail);

const userNames = users.reduce((str, user) => {
    return str + user.name + ', '
}, 'Your instructors are: ');
console.log(userNames);

const listLanguages = users.reduce((str, user) => {
    if(user.languages === )
}, '')
console.log(listLanguages)