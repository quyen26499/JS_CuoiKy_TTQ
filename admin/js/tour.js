function showTour(){
    var tour = JSON.parse(localStorage.getItem("listTour")) || [];

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
                    <button type="button" onclick="editTour(${tour[i].id})" class="btn btn-success">
                        <i class="fas fa-edit"></i>
                    </button>
                </td>
                <td>		  
                <button type="button" onclick="deleteTour(${tour[i].id})" class="btn btn-danger">
                    <i class="fas fa-times"></i>
                </button>
            </td>
            </tr>
        `;
        
        document.getElementById("manager-tour").innerHTML += html;
    }
}
var id;
function addTour(){
var tour = JSON.parse(localStorage.getItem("listTour")) || [];

for (i = 0; i <= tour.length; i++) {
    id = i+1;
}

var Tour = {
    id: id,
    name : document.getElementById("name").value,
    img: document.getElementById("img").value,
    price: document.getElementById("price").value,
    times: document.getElementById("times").value,
    note: document.getElementById("note").value,
}
tour.push(Tour);
localStorage.setItem('listTour', JSON.stringify(tour));
//Save();
window.location.reload();
console.log(tour);
}

//Xóa Tour 
var deleteTour = function(i){
tour.splice(i,1);
localStorage.setItem('88',JSON.stringify(tour));
window.location.reload();
}
// Edit Tour 
var editTour = function(i){
var k = tour[i];
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



