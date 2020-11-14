function showTour(){
    var booking = JSON.parse(localStorage.getItem("tourBooking")) || [];

    for (let i in booking) {
        var html =`
            <tr>
                <td>${booking[i].id}</td>
                <td>${booking[i].name}</td>
                <td>
                    <img src="${booking[i].img}" width=50px; height=50px;>
                </td>

                <td>${booking[i].price}</td>
                <td>${booking[i].date}</td>
                <td>${booking[i].note}</td>

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
function deleteBooking(id) {
    var booking = JSON.parse(localStorage.getItem("tourBooking")) || [];

    booking = booking;
    booking.splice(id,1);
    localStorage.setItem('tourBooking',JSON.stringify(booking));
    window.location.reload();
}



