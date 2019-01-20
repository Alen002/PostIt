var database = [
    {
        username: "Alen",
        password: "123"
    },
    {
        username: "Mark",
        password: "superuser"
    },
    {
        username: "Naoki",
        password: "japan01"
    },
];

var newsFeed = [
    {
        username: "Alen",
        timeline: "Travelling right now in SEA"
    },
    {
        username: "Mark",
        timeline: "Yesterday I have finished my exam lessons"
    },
    {
        username: "Naoki",
        timeline: "My country is beautiful"
    },

];

var userNamePrompt = prompt("Please enter your username");
var userPasswordPrompt = prompt("Please enter your password");


function signIn(name, password) {
    for (let index=0; index < database.length; index++ ) {
        if (database[index].username === name && database[index].password === password ) {
            return true; 
        } 
    }
    return false;
}

var result = signIn(userNamePrompt,userPasswordPrompt);

function showFeed(checkResult, userName) {
    if( checkResult === true) {
        for (let index=0; index < newsFeed.length; index++) {
            if (newsFeed[index].username === userName) {
                console.log(newsFeed[index].timeline);
            }
        }
    } else {
        console.log("No user");
    }
}

showFeed(result, userNamePrompt);











