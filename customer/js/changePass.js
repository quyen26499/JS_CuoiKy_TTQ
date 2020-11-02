function btnChange() {
    var customer = JSON.parse(localStorage.getItem("customer"));
    var user = JSON.parse(localStorage.getItem("user"));

    account = user;
    for (i in account) {
        if (account[i].id == customer[0].id) {
            if (document.getElementById("c_pass").value != account[i].pass) {
                alert("Old password is wrong!!!");
            } 
            else {
                if (document.getElementById("n_pass").value != document.getElementById("rn_pass").value) {
                    alert("Confirm new password is wrong!!!");
                } 
                else {
                    account[i].pass = document.getElementById("n_pass").value;
                    localStorage.setItem("user", JSON.stringify(account));
                    alert("Change password successfully");
                    document.getElementById('passOld').value = "";
                    document.getElementById('password').value = "";
                    document.getElementById('respassword').value = "";
                }
            }
        }
    }
}