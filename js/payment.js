function onloadCompleted() {
    var tour = JSON.parse(localStorage.getItem("tourBooking"));
    var total = JSON.parse(localStorage.getItem("total"));
    var res1 = '';
    for(i in tour){
    var name = tour[i].name;
    var person = tour[i].person;
    var price = parseFloat(tour[i].price);
    var img = tour[i].img;
    var datetour = tour[i].datetour;
    var date = tour[i].dateGo;
    var img = `
        <img src="${tour[0].img}" alt="Card image cap" style="width: 80px; height: 80px;"> `;
   
    let row = "<tr class='table-success'>";
  
    row += "<td>" + img + "</td>";
    row += "<td>" + name + "</td>";
    row += "<td>" + datetour + " Ngày</td>";
    row += "<td>" + date + "</td>";
    row += "<td>" + person + "</td>";
    row += "<td>" + price + " VNĐ</td>";
    row += "<td>" + total + " VNĐ</td>";
    row += "</tr>";
    res1 += row;
    }
    document.getElementById("tab").innerHTML = res1;
}
function payment() {

    var customer = JSON.parse(localStorage.getItem("customer"));
    var total = JSON.parse(localStorage.getItem("total"));
    var tourSuccess = JSON.parse(localStorage.getItem("tourSuccess")) || [];
    
    var user = JSON.parse(localStorage.getItem("user"));
    var choice = JSON.parse(localStorage.getItem("listTourChoice"));

      for (i in user) {
        if (user[i].id == customer[0].id) {
            for(e in choice) {
                // if (user[i].name != "" || user[i].contact == "" || user[i].address == "") {
                //     alert("Cật nhập thông tin tài khoản! ")  
                
                // } else {
                    
                    for (j = 0; j <= tourSuccess.length; j++) {
                        tourComplete = {
                          id: j,
                          dateGo: choice[e].dateGo,
                          person: choice[e].person,
                          destination: choice[e].destination,
                          // total: total,
                          idCustomer: choice[e].idCustomer,
                          email: user[i].email,
                          name: user[i].name,
                          contact: user[i].contact,
                          address: user[i].address,
                          status: "Waiting",
                          isActive: false,
                        };
                    }
                }
            // }
        }
      }
      tourSuccess.push(tourComplete);
      localStorage.setItem("tourSuccess", JSON.stringify(tourSuccess));
      localStorage.removeItem("listTourChoice");
      localStorage.removeItem("total");
      alert("Đặt  tour thành công! Chúng tôi sẽ sớm liên hệ với bạn, xin cảm ơn");
      window.location.href = "index.html";
}
