function btnDelete(id) {
    var d = confirm("Are you sure?");
    if (d == true) { 
        var user = JSON.parse(localStorage.getItem("user")) || [];
        user = user;
        user.splice(id, 1);
        localStorage.setItem("user", JSON.stringify(user));
        signOut();
    }
}
