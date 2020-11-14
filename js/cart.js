function onloadCompleted() {

    var tour = JSON.parse(localStorage.getItem("tourBooking"));
    var res1 = '';
    var img = `
      <img src="${tour[0].img}" alt="Card image cap" style="width: 80px; height: 80px;"> `;
    var row = "<tr>";
    row += "<td> " + img + "</td>";
    row += `<td>${tour[0].name} (${tour[0].date})</td>`;
    row += `<td>${tour[0].date}</td>`;
    row += `<td>
              <input type="number" value="${tour[0].datetour}" min="0" max="10" placeholder="Người lớn"><br><br>
              <input type="number" value="${tour[0].datetour}" min="0" max="10" placeholder="Trẻ em">
            </td>`;
    row += `<td>${tour[0].price} VND </td>`;
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
  