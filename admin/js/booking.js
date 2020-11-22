var order = [];
function loadOrder() {
  var tourSuccess = JSON.parse(localStorage.getItem("tourSuccess")) || [];
  if (tourSuccess.length > 0) {
    show();
  }
}

function show(){
    var success = JSON.parse(localStorage.getItem("tourSuccess")) || [];

    for (let i in success) {
        var html =`
            <tr>
                <td>${success[i].id}</td>
                <td>${success[i].email}</td>
                <td>${success[i].name}</td>
                <td>${success[i].contact}</td>

                <td><img src="${success[i].img}" width=35px; height=35px;> ${success[i].destination} (${success[i].date})</td>
                <td>${success[i].dateGo}</td>
                <td>${success[i].person}</td>
                <td>${success[i].total}</td>
                <td>
                    <select  class="status btn btn-light" onchange="changeOption(${i})">
                        <option value="${success[i].status}">${success[i].status}</option>
                        <option value="Waiting">Waiting</option>
                        <option value="Confirmed">Confirmed</option>
                    </select>
                </td>

                <td>		  
                    <button type="button" onclick="deleteBooking(${i})" class="btn btn-danger">
                        <i class="fas fa-times"></i>
                    </button>
                </td>

            </tr>
        `;
        
        document.getElementById("managerBooking").innerHTML += html;
    }
}



//Xóa success 
function deleteBooking(id) {
    var success = JSON.parse(localStorage.getItem("tourSuccess")) || [];

    success = success;
    success.splice(id,1);
    localStorage.setItem('tourSuccess',JSON.stringify(success));
    window.location.reload();
}

function changeOption(id) {
    var orders = JSON.parse(localStorage.getItem("tourSuccess")) || [];
    var order = orders;

    let selectBox = document.getElementsByClassName("status");

    for ( var i = 0; i < selectBox.length; i++) {
      if(i == id){
        var values= (selectBox[id][selectBox[id].selectedIndex].value);
      }
      if(values == "Waiting") {
        var status = "Waiting";
      }
      if(values == "Confirmed") {
        var status = "Confirmed";
      }
    }
    for (i = 0; i < order.length; i++) {
        for (e in orders) {
            order[i].id = orders[e].id;
            order[i].idCustomer = orders[e].idCustomer;
            order[i].dateGo = orders[e].dateGo;
            order[i].destination = orders[e].destination;
            order[i].email = orders[e].email;
            order[i].contact = orders[e].contact;
            order[i].person = orders[e].person;
            order[i].status = status;
            
        }
    }
    localStorage.setItem("tourSuccess", JSON.stringify(order));
    window.location.reload();
}



