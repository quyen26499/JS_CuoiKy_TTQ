function onloadIndex() {
    var customer = JSON.parse(localStorage.getItem("customer")) || [];
    if (customer.length > 0) {
        document.getElementById("signIn").style.display = "none"
        document.getElementById("signOut").style.display = "block"
        document.getElementById("emailUser").innerHTML = customer[0].email;
        // document.getElementById("nameUser").innerHTML = customer[0].email;
    } else {
        document.getElementById("signOut").style.display = "none"
        document.getElementById("userName").style.display = "none";
    }
}

function signOut() {
    localStorage.removeItem("customer");
    window.location.href = "../index.html";
};
