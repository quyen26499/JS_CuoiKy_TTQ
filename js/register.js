// const userAPI = "http://localhost:3000/user"

// function register() {
//     let email = document.getElementById("email").value;
//     let pass = document.getElementById("pass").value;
//     let repass = document.getElementById("repass").value;

//     var objUser = {
//         email : email,
//         pass : pass,
//         repass : repass
//     }

//     createUser(objUser);
// }

// function createUser() {
//     fetch(`${userAPI}`, {
//         method: 'POST',
//         body: JSON.stringify({
//             email : email,
//             pass : pass
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }

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

    for (let i in arrUser) {
        var checkEmail = arrUser[i].email;
    }

    if (email == checkEmail) {
        alert("Account is exist!!!")

    }
    else if (email != checkEmail) {

        var x = document.getElementsByClassName("input");
        
        var count;

        for (var i = 0; i < x.length; i++) {
            if (x[i].value == "") {
                count++;
                alert("Please " + x[i].placeholder);

            } else {
                count = 0;
            }
        }  

        if (objUser.pass == objUser.repass && count == 0) {
            arrUser.push(objUser = {
                id : id,
                email : email,
                pass : CryptoJS.MD5(pass).toString(),
                repass : repass,
            });
            localStorage.setItem("user", JSON.stringify(arrUser));
            alert("Register successfully!!!");
        } else if (objUser.pass != objUser.repass && count != 0){
            alert("Repassword wrong!!!");
        }
    }
}

