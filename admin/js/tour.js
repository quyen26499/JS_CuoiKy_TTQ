document.addEventListener('DOMContentLoaded', function() {
    const tourContainer = document.querySelector('#tourContainer')
    const tourURL = `http://localhost:3000/tour`
    const tourForm = document.querySelector('#formTour')
    let allTour = []

    fetch(`${tourURL}`)
        .then( response => response.json() )
        .then( tourData => tourData.forEach(function(tour) {
        allTour = tourData
        tourContainer.innerHTML += `
            <div id=tour-${tour.id}>
        ` 
    }))

    fetch(`${tourURL}`)
    .then( response => response.json() )
    .then( tourData => tourData.forEach(function(tour) {
        tourContainer.innerHTML += `
            <tr>
                <td>${tour.id}</td>
                <td>${tour.name}</td>
                <td>
                    <img src="${tour.img}" width=50px; height=50px;>
                </td>

                <td>${tour.price}</td>
                <td>${tour.date}</td>
                <td>${tour.note}</td>

                <td>		  
                    <button type="button" data-target="#updateTour" data-toggle="modal" class="btn btn-success">
                        <i class="fas fa-edit"></i>
                    </button>
                </td>
                <td>		  
                <button type="button" class="btn btn-danger" data-id="${tour.id}" data-action="delete">
                    <i class="fas fa-times"></i>
                </button>
                </td>
            </tr>
        `;
    })) // end of tour fetch

    tourForm.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const nameInput = tourForm.querySelector('#name').value
        const priceInput = tourForm.querySelector('#price').value
        const dateInput = tourForm.querySelector('#date').value
        const noteInput = tourForm.querySelector('#note').value
        const imgInput = tourForm.querySelector('#img').value

        fetch(`${tourURL}`, {
            method: 'POST',
            body: JSON.stringify({
                name : nameInput,
                price : priceInput,
                date : dateInput,
                note : noteInput,
                img : imgInput
            }),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then( response => response.json())
        .then( tour => {
            tourContainer.innerHTML += `
                <tr>
                    <td>${tour.id}</td>
                    <td>${tour.name}</td>
                    <td>
                        <img src="${tour.img}" width=50px; height=50px;>
                    </td>

                    <td>${tour.price}</td>
                    <td>${tour.date}</td>
                    <td>${tour.note}</td>

                    <td>		  
                        <button type="button" data-target="#updateTour" data-toggle="modal" class="btn btn-success">
                            <i class="fas fa-edit"></i>
                        </button>
                    </td>
                    <td>		  
                    <button class="btn btn-danger" data-id="${tour.id}" data-action="delete">
                        <i class="fas fa-times"></i>
                    </button>
                    </td>
                </tr>
            `;
        })
    })

    tourContainer.addEventListener('click', (e) => {
        if (e.target.dataset.action === 'edit') {
            
        } 
        else if (e.target.dataset.action === 'delete') {
            document.querySelector(`#tour-${e.target.dataset.id}`).remove()

            fetch(`${tourURL}/${e.target.dataset.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then( response => response.json())
        }
    })
})

// function showTour(){
//     var tour = JSON.parse(localStorage.getItem("listTour")) || [];

//     for (let i in tour) {
//         var html =`
//             <tr>
//                 <td>${tour[i].id}</td>
//                 <td>${tour[i].name}</td>
//                 <td>
//                     <img src="${tour[i].img}" width=50px; height=50px;>
//                 </td>

//                 <td>${tour[i].price}</td>
//                 <td>${tour[i].date}</td>
//                 <td>${tour[i].note}</td>

//                 <td>		  
//                     <button type="button" data-target="#updateTour" data-toggle="modal" class="btn btn-success">
//                         <i class="fas fa-edit"></i>
//                     </button>
//                 </td>
//                 <td>		  
//                 <button type="button" onclick="deleteTour(${i})" class="btn btn-danger">
//                     <i class="fas fa-times"></i>
//                 </button>
//             </td>
//             </tr>
//         `;
        
//         document.getElementById("manager-tour").innerHTML += html;
//     }
// }

// var id;
// function addTour(){
//     var tour = JSON.parse(localStorage.getItem("listTour")) || [];

//     for (i = 0; i <= tour.length; i++) {
//         id = i+1;
//     }

//     var Tour = {
//         id: id,
//         name : document.getElementById("name").value,
//         img: document.getElementById("img").value,
//         price: document.getElementById("price").value,
//         times: document.getElementById("times").value,
//         note: document.getElementById("note").value,
//     }
//     tour.push(Tour);
//     localStorage.setItem('listTour', JSON.stringify(tour));
//     window.location.reload();
//     console.log(tour);
// }

// //Xóa Tour 
// function deleteTour(id) {
//     var tour = JSON.parse(localStorage.getItem("listTour")) || [];

//     tour = tour;
//     tour.splice(id,1);
//     localStorage.setItem('listTour',JSON.stringify(tour));
//     window.location.reload();
// }
// // Edit Tour 
// var editTour = function(i){
// var k = tour[i];
// document.getElementById("idd").value = k.id;
// document.getElementById("named").value = k.name;
// document.getElementById("imgd").value = k.img;
// document.getElementById("priced").value = k.price;
// document.getElementById("timesd").value = k.times;
// document.getElementById("noted").value = k.note;
// document.getElementById("idd").setAttribute("disabled","disabled");
// document.getElementById("submitUpdate").innerHTML =
//     '<button class="btn btn-outline-danger mt-3" onclick="submitUpdate('+i+')">Đồng ý</button>'

// }
// var submitUpdate = function(i){
// var k = tour[i];
// k.id= document.getElementById("idd").value;
// k.name= document.getElementById("named").value;
// k.img= document.getElementById("imgd").value;
// k.price= document.getElementById("priced").value;
// k.times= document.getElementById("timesd").value;
// k.note= document.getElementById("noted").value;
// //document.getElementById("idd").setAttribute("disabled","disabled");
// localStorage.setItem('listTour', JSON.stringify(tour));
// window.location.reload();
// }



