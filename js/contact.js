var id;

function register() {

    var arrUser = JSON.parse(localStorage.getItem("user")) || [];
    
    for (i = 0; i <= arrUser.length; i++) {
        id = i+1;
    }

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let repass = document.getElementById("repass").value;

    let objUser = {
        id : id,
        email : email,
        pass : pass,
        repass : repass,
    };

    
}

