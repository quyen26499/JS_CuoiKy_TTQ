var arrUser = JSON.parse(localStorage.getItem("user"));

for (i in user) {
    html = `
    <tr>
        <td>${user[i].id}</td>
        <td>${user[i].email}</td>
    </tr>
    `;
}

document.getElementById("user").innerHTML = html;