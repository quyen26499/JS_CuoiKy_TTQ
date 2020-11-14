function onloadCompleted() {
    var tour = JSON.parse(localStorage.getItem("tourBooking"));
    var res1 = '';
    var img = `
        <img src="${tour[0].img}" alt="Card image cap" style="width: 80px; height: 80px;"> `;
    var row = "<tr>";
    row += "<td> " + img + "</td>";
    row += `<td>${tour[0].name}</td>`;
    row += `<td>${tour[0].date} </td>`;
    row += `<td>${tour[0].price} </td>`;
    row += `<td>${tour[0].price} VND </td>`;
    row += "</tr>";
    res1 += row;
    document.getElementById("tab").innerHTML = res1;
}
function payment() {

    var customer = JSON.parse(localStorage.getItem("customer"));
    var total = JSON.parse(localStorage.getItem("total"));
    var tourSuccess = JSON.parse(localStorage.getItem("tourSuccess")) || [];
    
    var user = JSON.parse(localStorage.getItem("user"));
    var listTourChoice = JSON.parse(localStorage.getItem("listTourChoice"));

      for (i in user) {
        if (user[i].id == customer[0].id) {
            if (user.name == "" || user.contact == "" || user.address == "") {
                alert("Cật nhập thông tin tài khoản! ")  
            
            } else {
                
                for (j = 0; j <= tourSuccess.length; j++) {
                    tourComplete = {
                      id: j,
                      date: listTourChoice.dateGo,
                      person: listTourChoice.person,
                      destination: listTourChoice.destination,
                      // total: total,
                      idCustomer: user[i].id,
                      email: user[i].email,
                      name: user[i].name,
                      contact: user[i].contact,
                      address: user[i].address,
                      status: "Đang chờ xử lý",
                      isActive: false,
                    };
                }
            }
        }
      }
      tourSuccess.push(tourComplete);
      localStorage.setItem("tourSuccess", JSON.stringify(tourSuccess));
      localStorage.removeItem("listTourChoice");
      localStorage.removeItem("total");
      alert("Đặt  tourthành công! Chúng tôi sẽ sớm liên hệ với bạn, xin cảm ơn");
      window.location.href = "index.html";
}
