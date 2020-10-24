var id;

function register() {

    var arrUser = JSON.parse(localStorage.getItem("user")) || [];
        for (i = 0; i <= arrUser.length; i++) {
            id = i;
    }

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let repass = document.getElementById("repass").value;

    let objUser = {
        id : id,
        email : email,
        pass : pass,
        repass : repass
    };

    if (objUser.pass == objUser.repass) {
        arrUser.push(objUser);
        localStorage.setItem("user" , JSON.stringify(arrUser));
        alert("Registered successfully");
        window.location.hash = "login";
        console.log(arrUser);

        btnLogin();
    } else {
        alert("Repassword incorrect")
        window.location.hash = "register";
    }
}