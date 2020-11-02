function productAdmin(){
   
   var listtour1 = "";
   for (let i = 0; i< tour.length;i++){
       var listtour1 ="<tr >";
       listtour1 += "<td>" + tour[i].id + "</td>";
       listtour1 += "<td>" +tour[i].name + "</td>";
       listtour1 +=
         "<td>" +
         `<img src="${tour[i].img}" style="width: 80px; height: 80px"/>` +
         "</td>";
       listtour1 += "<td>" + tour[i].price+"₫" + "</td>";
       listtour1 += "<td>" + tour[i].datetour + "</td>";
       listtour1 += "<td>" + tour[i].note + "</td>";
       listtour1 +=
         "<td>" +
         `<button type="button" onclick="edittour(${tour[i].id})" class="btn btn-success"><i class="fas fa-edit"></i></button>` +
         "</td>";
       listtour1 +=
         "<td>" +
         `<button type="button" onclick="deletetour(${tour[i].id})" class="btn btn-danger"><i class="fa fa-times" aria-hidden="true"></i></button>` +
         "</td>";
       listtour1 += "</tr>";
       
       document.getElementById("manager-tour").innerHTML += listtour1;
   }
}

function addTour(){
   var Tour = {
       id:"SP" + parseInt (tour.length+1),
       name: document.getElementById("name").value,
       img: document.getElementById("img").value,
       price: document.getElementById("price").value,
       times: document.getElementById("times").value,
       note: document.getElementById("note").value,
   }
   tour.push(Tour);
   localStorage.setItem('listTour', JSON.stringify(tour));
   //Save();
   window.location.reload();
}
//Xóa Tour 
var deletetour = function(i){
   tour.splice(i,1);
   localStorage.setItem('88',JSON.stringify(tour));
   window.location.reload();
}
// Edit Tour 
var edittour = function(i){
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