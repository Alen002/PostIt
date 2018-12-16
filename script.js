var database = [
    {
        username: "Alen",
        password: "123"
    }
];

var newsFeed = [
    {
        username: "Sarah",
        timeline: "Travelling right now in SEA"
    },
    {
        username: "Mark",
        timeline: "Yesterday I have finished my exam lessons"
    }
];

var userNamePrompt = prompt("Please enter your username");
var userPasswordPrompt = prompt("Please enter your password");


function signIn(username, password) {
    if (username === database[0].username && password === database[0].password){
        for (i=0; newsFeed.length; i++){
            document.write(newsFeed[i].username + '</br>')
            document.write(newsFeed[i].timeline + '</p>');
            }
        }
    else {
        alert("Wrong User Name");
    }
}

signIn(userNamePrompt, userPasswordPrompt);