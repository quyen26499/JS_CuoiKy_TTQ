function load() {
    var customer = JSON.parse(localStorage.getItem("customer"));
    var user = JSON.parse(localStorage.getItem("user"));

    for (i in user) {
        if (user[i].id == customer[0].id) {
            document.getElementById("name").value = user[i].name;
            document.getElementById("contact").value = user[i].contact;
            document.getElementById("address").value = user[i].address;
        }
    }
}

var account;
function btnUpdate() {
    var customer = JSON.parse(localStorage.getItem("customer"));
    var user = JSON.parse(localStorage.getItem("user"));

    account = user;
    for (i in account) {
        if (account[i].id == customer[0].id) {
            account[i].name = document.getElementById("name").value;
            account[i].contact = document.getElementById("contact").value;
            account[i].address = document.getElementById("address").value;
            account[i].img = document.getElementById("img").value;
        }
    }
    localStorage.setItem("user", JSON.stringify(account));
    alert("Update successfully!!!");
    window.location.href = "editUser.html"
}