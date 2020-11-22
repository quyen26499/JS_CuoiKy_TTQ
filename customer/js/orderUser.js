function loadOrder()  {
    var success = JSON.parse(localStorage.getItem("tourSuccess")) || [];

    var customer = JSON.parse(localStorage.getItem("customer")) || [];
    for (i = 0; i < success.length; i++) {
    if (customer[0].id == success[i].idCustomer) {
            var html = `
            <tr>
                <td>${success[i].id}</td>
                <td>${success[i].destination}</td>


                <td><img src="${success[i].img}" width=35px; height=35px;> ${success[i].destination} (${success[i].date})</td>
                <td>${success[i].dateGo}</td>
                <td>${success[i].person}</td>
                <td>${success[i].total}</td>
                <td>${success[i].status}</td>
            </tr>
            `;
            document.getElementById("orderUser").innerHTML += html;
    }
    
}

}
