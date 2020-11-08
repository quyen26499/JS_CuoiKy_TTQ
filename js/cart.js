function onloadCompleted() {

    var tour = JSON.parse(localStorage.getItem("tourBooking"));
    var res1 = '';
    var img = `
      <img src="${tour[0].img}" alt="Card image cap" style="width: 80px; height: 80px;"> `;
    var row = "<tr class='table-success'>";
    row += "<td> " + img + "</td>";
    row += `<td>Tour ${tour[0].name}</td>`;
    row += `<td>${tour[0].datetour} ngày</td>`;
    row += `<td>
              <input type="number" value="${tour[0].datetour}" min="0" max="10">
            </td>`;
    row += `<td>Tour ${tour[0].price} VND </td>`;
    row += "</tr>";
    res1 += row;
    document.getElementById("tab").innerHTML = res1;
  }
function cancle(){
    localStorage.removeItem('tourBooking');
    window.location.href = 'booking.html';
  }
  function payment(){
    window.location.href = 'payment.html';
  }
  