var user = [];

function load() {
    var user = JSON.parse(localStorage.getItem("user")) || [];
    
    if (user.length > 0) {
        show();
    }
}

function show() {
    var user = JSON.parse(localStorage.getItem("user")) || [];

    for (let i in user) {
        if (user[i].address == undefined) {
            user[i].address = "";
        } 
        if (user[i].contact == undefined) {
            user[i].contact = "";
        }
        if (user[i].name == undefined) {
            user[i].name = "";
        }
        if (user[i].img == undefined) {
            user[i].img = "https://vnn-imgs-f.vgcloud.vn/2020/03/23/11/trend-avatar-1.jpg";
        }

        var html =`
            <tr>
                <td>${user[i].id}</td>

                <td>${user[i].email}</td>
                <td>${user[i].name}</td>
                <td>${user[i].contact}</td>
                <td>${user[i].address}</td>
                <td>		  
                    <button type="button" onclick="del(${i})" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></button>
                </td>
            </tr>
        `;
        
        document.getElementById("user").innerHTML += html;
    }
}

function del(id) {
    var d = confirm("Are you sure?");
    if (d == true) { 
        var user = JSON.parse(localStorage.getItem("user")) || [];
        user = user;
        user.splice(id, 1);
        localStorage.setItem("user", JSON.stringify(user));
        show();
        window.location.href = "user.html"
    }
}
