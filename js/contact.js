var id;
function getContact(){
    
    var contact = JSON.parse(localStorage.getItem("listContact")) || [];    
    for (i = 0; i <= contact.length; i++) {
        id = i+1;
    }
    let fName = document.getElementById("fname").value;
    let lName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let objContact = {
        id : id,
        fname : fName,
        lname: lName,
        email : email,
        subject : subject,
        message : message,
    };

    var x = document.getElementsByClassName("input");
        
    var count;

    for (var i = 0; i < x.length; i++) {
        if (x[i].value == "") {
            count++;
        } else {
            count = 0;
        }
    }  

    if (count == 0) {
        contact.push(objContact);
        localStorage.setItem("listContact", JSON.stringify(contact));
        alert("Gửi thành công! Chúng tôi sẽ phản hồi lại sau");
        window.location.reload();
    } 
}