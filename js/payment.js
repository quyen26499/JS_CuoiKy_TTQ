 function onloadCompleted() {

  var tour = JSON.parse(localStorage.getItem("tourBooking"));
  var res1 = '';
  var img = `
    <img src="${tour[0].img}" alt="Card image cap" style="width: 80px; height: 80px;"> `;
  var row = "<tr>";
  row += "<td> " + img + "</td>";
  row += `<td>${tour[0].name}</td>`;
  row += `<td>${tour[0].datetour} </td>`;
  row += `<td>${tour[0].datetour} </td>`;
  row += `<td>${tour[0].price} VND </td>`;
  row += "</tr>";
  res1 += row;
  document.getElementById("tab").innerHTML = res1;
}
function payment() {
  if (localStorage.getItem('tourBookingSuccess') != null) {
    var tour = JSON.parse(localStorage.getItem('tourBooking'));
    const data = JSON.parse(localStorage.getItem('tourBookingSuccess'));
    data.push(tour);
    localStorage.setItem('tourBookingSuccess', JSON.stringify(data));

    alert('Thanh toán thành công');
    window.location.href = 'index.html';
  } else {
    var tour = JSON.parse(localStorage.getItem('tourBooking'));
    localStorage.setItem('tourBookingSuccess', JSON.stringify(tour));

  
    alert('Thanh toán thành công');
    window.location.href = 'index.html';
  }

}
