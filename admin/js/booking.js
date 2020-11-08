function showTour(){
    var BookingSuccess = JSON.parse(localStorage.getItem("listBooking")) || [];

    for (let i in BookingSuccess) {
        var html =`
            <tr>
                <td>${BookingSuccess[i].id}</td>
                <td>${BookingSuccess[i].name}</td>
                <td>
                    <img src="${BookingSuccess[i].img}" width=50px; height=50px;>
                </td>

                <td>${BookingSuccess[i].price}</td>
                <td>${BookingSuccess[i].datetour}</td>
                <td>${BookingSuccess[i].note}</td>

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



//Xóa BookingSuccess 
function deleteTour(id) {
    var BookingSuccess = JSON.parse(localStorage.getItem("listTour")) || [];

    BookingSuccess = BookingSuccess;
    BookingSuccess.splice(id,1);
    localStorage.setItem('listTour',JSON.stringify(BookingSuccess));
    window.location.reload();
}
// Edit BookingSuccess 
var editTour = function(i){
var k = BookingSuccess[i];
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
var k = BookingSuccess[i];
k.id= document.getElementById("idd").value;
k.name= document.getElementById("named").value;
k.img= document.getElementById("imgd").value;
k.price= document.getElementById("priced").value;
k.times= document.getElementById("timesd").value;
k.note= document.getElementById("noted").value;
//document.getElementById("idd").setAttribute("disabled","disabled");
localStorage.setItem('listTour', JSON.stringify(BookingSuccess));
window.location.reload();
}



