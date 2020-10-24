var admin = {
    email : "admin",
    pass : "admin"
};
localStorage.setItem("admin" , JSON.stringify(admin));

var customer = [];

function login() {
    var user = JSON.parse(localStorage.getItem("user")) || [];
    var admin = JSON.parse(localStorage.getItem("admin")) || [];

    var email = document.getElementById("userEmail").value;
    var pass = document.getElementById("userPass").value;
    
    if (email == admin.email && pass == admin.email) {
        window.location.href = "admin.html";
    } else {
        for (let i in user) {
            if (user[i].email == email && user[i].pass == pass) {
                alert("Login successfully")
                window.location.href = "tour.html";
                customer = [
                {
                    id: user[i].id,
                    email: user[i].email
                }
                ];
            } else {
                alert("Login failed")
                window.location.hash = "login";
            }
        }
    }
    localStorage.setItem("customer", JSON.stringify(customer));
}