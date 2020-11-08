function showTour(){
    var booking = JSON.parse(localStorage.getItem("listTourChoice")) || [];

    for (let i in booking) {
        var html =`
            <tr>
                <td>${booking[i].id}</td>
                <td>${booking[i].name}</td>
                <td>
                    <img src="${booking[i].img}" width=50px; height=50px;>
                </td>

                <td>${booking[i].price}</td>
                <td>${booking[i].datetour}</td>
                <td>${booking[i].note}</td>

                <td>		  
                    <button type="button" onclick="editBooking(${i})" class="btn btn-success">
                        <i class="fas fa-edit"></i>
                    </button>
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



//Xóa booking 
function deleteTour(id) {
    var booking = JSON.parse(localStorage.getItem("listTour")) || [];

    booking = booking;
    booking.splice(id,1);
    localStorage.setItem('listTour',JSON.stringify(booking));
    window.location.reload();
}
// Edit booking 
var editTour = function(i){
var k = booking[i];
document.getElementById("idd").value = k.id;
document.getElementById("named").value = k.name;
document.getElementById("imgd").value = k.img;
document.getElementById("priced").value = k.price;
document.getElementById("timesd").value = k.times;
document.getElementById("noted").value = k.note;
document.getElementById("idd").setAttribute("disabled","disabled");
document.getElementById("submitUpdate").innerHTML =
    '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate('+i+')">Đồng ý</button>'

}
var submitUpdate = function(i){
var k = booking[i];
k.id= document.getElementById("idd").value;
k.name= document.getElementById("named").value;
k.img= document.getElementById("imgd").value;
k.price= document.getElementById("priced").value;
k.times= document.getElementById("timesd").value;
k.note= document.getElementById("noted").value;
//document.getElementById("idd").setAttribute("disabled","disabled");
localStorage.setItem('listTour', JSON.stringify(booking));
window.location.reload();
}



