
var sub =0;
function onloadCompleted() {

  sub  = 0;
  var tour = JSON.parse(localStorage.getItem("tourBooking"));
  var res1 = '';
  for (i in tour) {
    var name = tour[i].name;
    var person = tour[i].person;
    var price = parseFloat(tour[i].price);
    var img = tour[i].img;
    var datetour = tour[i].datetour;
    var date = tour[i].dateGo;
    var total = parseFloat((person*100) + price);
    var newPrice =
      "<span id='nn_" + i + "'>" + price + "</span>";
    var newPerson =
      "<input type='number' value='" + person + "' id='nm_" + i + "' onkeyup='person(" + i + "); total()'>";
  
    var newResult =
      "<spam class='sum' id='result_" + i + "' >" + total + "</span>";
    sub += total;
    var html = `
    <img src="${img}" alt="Card image cap" style="width: 80px; height: 80px;"> `;
    var ii = i;
    ii++;
    let row = "<tr class='table-success'>";
    row += "<td>" + html + "</td>";
    row += "<td>" + name + "</td>";
    row += "<td>" + datetour + " Ngày</td>";
    row += "<td>" + date + "</td>";
    row += "<td>" + newPerson + "</td>";
    row += "<td>" + newPrice + " VNĐ</td>";
    row += "<td>" + newResult + " VNĐ</td>";
    row += "</tr>";
    res1 += row;
  }
  var row1 = "<tr>";
  row1 += "<td>" + "Tổng" + "</td>";
  row1 += "<td></td>";
  row1 += "<td></td>";
  row1 += "<td></td>";
  row1 += "<td></td>";
  row1 += "<td></td>";
  row1 += "<td>" + `<span id='sub'>${sub} VNĐ</span>` + "</td>";
  row1 += "</tr>";
  document.getElementById("tab").innerHTML = res1;
  document.getElementById("tr").innerHTML = row1;

}
function person(id) {
  $("#result_" + id).text(
    parseFloat($("#nn_" + id).text()) * parseFloat($("#nm_" + id).val()) || 0
  );
  var tour = JSON.parse(localStorage.getItem("tourBooking")) || [];
  var tours = tour;
  for (i = 0; i < tours.length; i++) {
    if (i == id) {
      tours[i].person = parseInt($("#nm_" + id).val() || 0);
    }
  }
  localStorage.setItem("tourBooking", JSON.stringify(tours));
}
function total() {
  var sum = 0;
  $.each($(".sum"), function () {
    sum += Number($(this).text());
  });
  $("#sub").text(sum);
  return sum;
}
function cancle(){
    localStorage.removeItem('tourBooking');
    window.location.href = 'booking.html';
  }
  function payment(){
    localStorage.setItem('total', JSON.stringify(total()));
    window.location.href = 'payment.html';
  }
