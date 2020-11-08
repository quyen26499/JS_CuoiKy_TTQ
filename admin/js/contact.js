var contact = [];

function load() {
    var contact = JSON.parse(localStorage.getItem("listContact")) || [];
    
    if (contact.length > 0) {
        show();
    }
}

function show() {
    var contact = JSON.parse(localStorage.getItem("listContact")) || [];

    for (let i in contact) {
        var html =`
            <tr>
                <td>${contact[i].id}</td>
                <td>${contact[i].fname}</td>
                <td>${contact[i].lname}</td>
                <td>${contact[i].email}</td>
                <td>${contact[i].subject}</td>
                <td>${contact[i].message}</td>

                <td>		  
                <button type="button" onclick="del(${i})" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></button>
                </td>
            </tr>
        `;
        
        document.getElementById("contact").innerHTML += html;
    }
}

function del(id) {
    var d = confirm("Are you sure?");
    if (d == true) { 
        var contact = JSON.parse(localStorage.getItem("listContact")) || [];
        contact = contact;
        contact.splice(id, 1);
        localStorage.setItem("listContact", JSON.stringify(contact));
        show();
        window.location.href = "contact.html"
    }
}
