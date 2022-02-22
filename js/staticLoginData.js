var loginUsers = [];
var loggedInUser="";
loginUsers.push({ username: "Meghana", password: "Meghana" });
loginUsers.push({ username: "Ganesh", password: "ganesh" });
function verifyUser(username, password) {
    var user = null;
    user=loginUsers.find(function (user) {
        return (user.username == username && user.password == password)
    })
    if (user!=null) {
        return true;
    } else {
        return false;
    }
}

function setLoggedInUser(username){
    loggedInUser=username;
}

function getLoggedInUser(){
    return loggedInUser;
}
