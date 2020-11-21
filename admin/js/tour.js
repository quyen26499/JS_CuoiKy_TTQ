// function fetchTour(){
//     fetch('http://localhost:3000/tours')
//         .then(resp => resp.json())
//         .then(renderTour)
// }

// const tourContainer = document.getElementById('manager-tour')

// function renderTour(tours) {
//     tourContainer.innerHTML = ""

//     tours.forEach(function (tour) {
//         tourContainer.innerHTML += `
//             <div data-id=${tour.id}>
//                 <tr>
//                     <td></td>
//                     <td>${tour.name}</td>
//                     <td>
//                         <img src="${tour.img}" width=50px; height=50px;>
//                     </td>

//                     <td>${tour.price}</td>
//                     <td>${tour.date}</td>
//                     <td>${tour.note}</td>

//                     <td>		  
//                         <button class="btn btn-success" id="editTour">
//                             <i class="fas fa-edit"></i>
//                         </button>
//                     </td>
//                     <td>		  
//                         <button class="btn btn-danger" data-id=${tour.id} id="deleteTour">
//                             <i class="fas fa-date"></i>
//                         </button>
//                     </td>
//                 </tr>
//             </div>
//         `
//     })
// }

// const createTourForm = document.querySelector('.createTourForm')

// createTourForm.addEventListener('submit', function (event) {

//     fetch(`http://localhost:3000/tours/`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             name: `${event.target.name.value}`,
//             price: `${event.target.price.value}`,
//             date: `${event.target.date.value}`,
//             note: `${event.target.note.value}`,
//             img: `${event.target.img.value}`,
//         })
//     })
//         .then(resp => resp.json())
//         .then(renderTour)
// })

// tourContainer.addEventListener('click', function (event) {
//     let editTour = event.target.className === "editTour"
//     let deleteTour = event.target.id === "deleteTour"

//     if (editTour) {
//         // let id = event.target.parentElement.dataset.id
//         // let like = event.target.previousElementSibling
//         // let likeCount = parseInt(event.target.previousElementSibling.innerText)
//         // like.innerText = `${++likeCount} likes`

//         // fetch(`http://localhost:3000/toys/${id}`, {
//         //     method: 'PATCH',
//         //     headers: {
//         //         'Content-Type': 'application/json',
//         //     },
//         //     body: JSON.stringify({
//         //         likes: likeCount
//         //     })
//         //     })
//         //     .then(response => response.json())
//     }
//     else if (deleteTour) {
//         let id = event.target.parentElement.dataset.id;

//         fetch(`http://localhost:3000/tours/${id}`, {
//             method: 'DELETE'
//         })
//             .then(response => response.json())
//             .then(fetchTour)
//     }
// })


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
                    <button type="button" onclick="editTour(${tour[i].id})" data-toggle="modal" data-target="#updateModal"  class="btn btn-success">
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
        date: document.getElementById("date").value,
        note: document.getElementById("note").value,
    }
    tour.push(Tour);
    localStorage.setItem('listTour', JSON.stringify(tour));
    console.log(tour);
}

//Xóa Tour 
function deleteTour(id) {
    var tour = JSON.parse(localStorage.getItem("listTour")) || [];

    tour = tour;
    tour.splice(id,1);
    localStorage.setItem('listTour',JSON.stringify(tour));
    window.location.reload();
}
// Edit Tour 
var editTour = function(i){
    var tour = JSON.parse(localStorage.getItem("listTour")) || [];
    var k = tour[i];
    document.getElementById("idd").value = k.id;
    document.getElementById("named").value = k.name;
    document.getElementById("imgd").value = k.img;
    document.getElementById("priced").value = k.price;
    document.getElementById("timesd").value = k.date;
    document.getElementById("noted").value = k.note;
    document.getElementById("idd").setAttribute("disabled","disabled");
    document.getElementById("submitUpdate").innerHTML = 
     `<button type="button" onclick="editok(${id})" class="btn btn-success">save</button>`;
}

var k;
function editok() {
    
    var tour = JSON.parse(localStorage.getItem("listTour"));

    k = tour;
    for (i in k) {
        if (k[i].id == k[0].id) {
            k[i].id= document.getElementById("idd").value;
    k[i].name= document.getElementById("named").value;
    k[i].img= document.getElementById("imgd").value;
    k[i].price= document.getElementById("priced").value;
    k[i].date= document.getElementById("timesd").value;
    k[i].note= document.getElementById("noted").value;
        }
    }
    localStorage.setItem("listTour", JSON.stringify(k));
    alert("Cập nhật thành công!!!");
    window.location.href = "tour.html"
}
// function editok(i) {
//     var tour = JSON.parse(localStorage.getItem("listTour")) || [];
//     var k = tour[i];
//     k.id= document.getElementById("idd").value;
//     k.name= document.getElementById("named").value;
//     k.img= document.getElementById("imgd").value;
//     k.price= document.getElementById("priced").value;
//     k.date= document.getElementById("timesd").value;
//     k.note= document.getElementById("noted").value;
//     //document.getElementById("idd").setAttribute("disabled","disabled");
//     localStorage.setItem('listTour', JSON.stringify(tour));
//     window.location.reload();
// }
