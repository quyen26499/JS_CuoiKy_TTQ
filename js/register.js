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
        repass : repass,
    };

    // if (arrUser[email] === "undefined") { // Kiểm tra email tòn tại 
    //     alert("Account already exists");
    //     window.location.hash = "register";
    //     document.getElementById("email").value = "";
    //     document.getElementById("pass").value = "";
    //     document.getElementById("repass").value = "";

    // } else 
    if (objUser.pass == objUser.repass) {
        arrUser.push(objUser);
        localStorage.setItem("user" , JSON.stringify(arrUser));
        alert("Registered successfully");
        window.location.hash = "login";
        console.log(arrUser);
        getUnique();

    } else if  (obj.pass != obj.repass) {
        alert("Repassword incorrect")
        window.location.hash = "register";
    };
    
}
function getUnique() {
    let uniqueArray = Array.from(new Set(arrUser));
    console.log(uniqueArray);
};