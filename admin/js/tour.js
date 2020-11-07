function showTour(){
    var tour = JSON.parse(localStorage.getItem("tour")) || [];

    for (let i in tour) {
        var html =`
            <tr>
                <td>${tour[i].id}</td>
                <td>${tour[i].name}</td>
                <td>
                    <img src="${tour[i].img}" width=50px; height=50px;>
                </td>

                <td>${tour[i].price}</td>
                <td>${tour[i].datetour}</td>
                <td>${tour[i].note}</td>

                <td>		  
                    <button type="button" onclick="editTour(${i})" class="btn btn-success">
                        <i class="fas fa-edit"></i>
                    </button>
                </td>
                <td>		  
                <button type="button" onclick="deleteTour(${i})" class="btn btn-danger">
                    <i class="fas fa-times"></i>
                </button>
            </td>
            </tr>
        `;
        
        document.getElementById("manager-tour").innerHTML += html;
    }
}
var id;

function addTour() {

    var tour = JSON.parse(localStorage.getItem("tour")) || [];
    
    for (i = 0; i <= tour.length; i++) {
        id = i+1;
    }

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let times = document.getElementById("times").value;
    let note = document.getElementById("note").value;
    let img = document.getElementById("img").value;

    let objTour = {
        id : id,
        name : name,
        price : price,
        times : times,
        note : note,
        img : img
    };
    
    tour.push(objTour);
    localStorage.setItem("tour", JSON.stringify(tour));
    window.location.reload();
}


//Xóa Tour 
function deleteTour(id) {
    var tour = JSON.parse(localStorage.getItem("tour")) || [];
    tour = tour;
    tour.splice(id, 1)
    localStorage.setItem("tour", JSON.stringify(tour));
    window.location.reload();
}

// Edit Tour 
function editTour(id) {
    var tour = JSON.parse(localStorage.getItem("tour")) || [];

    k = tour;
    for (i in k) {
        document.getElementById("named").value = k[i].name;
        document.getElementById("imgd").value = k[i].img;
        document.getElementById("priced").value = k[i].price;
        document.getElementById("timesd").value = k[i].times;
        document.getElementById("noted").value = k[i].note;
        document.getElementById("idd").setAttribute("disabled","disabled");
        document.getElementById("submitUpdate").innerHTML =
            '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate('+i+')">Đồng ý</button>'
    }
}

var submitUpdate = function(i){
var k = tour[i];
k.id= document.getElementById("idd").value;
k.name= document.getElementById("named").value;
k.img= document.getElementById("imgd").value;
k.price= document.getElementById("priced").value;
k.times= document.getElementById("timesd").value;
k.note= document.getElementById("noted").value;
//document.getElementById("idd").setAttribute("disabled","disabled");
localStorage.setItem('listTour', JSON.stringify(tour));
window.location.reload();

}



